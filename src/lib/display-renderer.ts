import { displayShader, sceneShader, vertexShader } from "./display-shaders"
import { signalShader } from "./display-signal-shader"

// Copies a (possibly integer-upscaled) video frame into a native-resolution
// source texture, so the filters see one texel per original game pixel.
const copyShader = `#version 300 es
precision highp float;
uniform sampler2D video;
in vec2 uv;
out vec4 outputColor;
void main() { outputColor = vec4(texture(video, vec2(uv.x, 1.0 - uv.y)).rgb, 1.0); }
`

export type DisplaySource = { video: HTMLVideoElement; width: number; height: number }
export type RendererOptions = { source?: DisplaySource; curvature?: number; aspect?: number; maxWidth?: number }

export function createDisplayRenderer(canvas: HTMLCanvasElement, options: RendererOptions = {}) {
  const gl = canvas.getContext("webgl2", { alpha: false, antialias: false, powerPreference: "low-power", preserveDrawingBuffer: true })
  if (!gl) throw new Error("WebGL2 unavailable")
  const sourceWidth = options.source?.width ?? 320
  const sourceHeight = options.source?.height ?? 240
  const curvature = options.curvature ?? .12
  const aspect = options.aspect ?? sourceWidth / sourceHeight
  const maxWidth = options.maxWidth ?? 1440
  const shaders: WebGLShader[] = []
  const programs: WebGLProgram[] = []
  const buffers: WebGLBuffer[] = []
  const textures: WebGLTexture[] = []
  const samplers: WebGLSampler[] = []
  const frames: WebGLFramebuffer[] = []
  const dispose = () => {
    shaders.forEach(item => gl.deleteShader(item)); programs.forEach(item => gl.deleteProgram(item))
    buffers.forEach(item => gl.deleteBuffer(item)); textures.forEach(item => gl.deleteTexture(item))
    samplers.forEach(item => gl.deleteSampler(item)); frames.forEach(item => gl.deleteFramebuffer(item))
  }
  try {
    const program = (fragment: string) => {
      const p = gl.createProgram()
      if (!p) throw new Error("Program allocation failed")
      programs.push(p)
      for (const [type, source] of [[gl.VERTEX_SHADER, vertexShader], [gl.FRAGMENT_SHADER, fragment]] as const) {
        const shader = gl.createShader(type)
        if (!shader) throw new Error("Shader allocation failed")
        shaders.push(shader); gl.shaderSource(shader, source); gl.compileShader(shader)
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader) ?? "Shader compilation failed")
        gl.attachShader(p, shader)
      }
      gl.linkProgram(p)
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error("Shader linking failed")
      return p
    }
    const scene = options.source ? program(copyShader) : program(sceneShader)
    const signal = program(signalShader)
    const display = program(displayShader)
    const buffer = gl.createBuffer()!
    buffers.push(buffer); gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW)
    const makeTexture = (filter: number) => {
      const texture = gl.createTexture()!
      textures.push(texture); gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, sourceWidth, sourceHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter)
      return texture
    }
    const texture = makeTexture(gl.NEAREST)
    const signalTexture = makeTexture(gl.LINEAR)
    let videoTexture: WebGLTexture | null = null
    if (options.source) {
      videoTexture = gl.createTexture()!
      textures.push(videoTexture); gl.bindTexture(gl.TEXTURE_2D, videoTexture)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    }
    const framebuffer = gl.createFramebuffer()!
    frames.push(framebuffer); gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) throw new Error("Framebuffer incomplete")
    for (const filter of [gl.NEAREST, gl.LINEAR]) {
      const sampler = gl.createSampler()!
      samplers.push(sampler)
      gl.samplerParameteri(sampler, gl.TEXTURE_MIN_FILTER, filter); gl.samplerParameteri(sampler, gl.TEXTURE_MAG_FILTER, filter)
      gl.samplerParameteri(sampler, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.samplerParameteri(sampler, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    }
    const activate = (p: WebGLProgram) => {
      gl.useProgram(p)
      const position = gl.getAttribLocation(p, "position")
      gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
    }
    const frameLocation = gl.getUniformLocation(scene, "frame")
    const videoLocation = gl.getUniformLocation(scene, "video")
    const modeLocation = gl.getUniformLocation(display, "mode")
    const dividerLocation = gl.getUniformLocation(display, "divider")
    const sizeLocation = gl.getUniformLocation(display, "outputSize")
    const displaySourceSize = gl.getUniformLocation(display, "sourceSize")
    const curvatureLocation = gl.getUniformLocation(display, "curvature")
    const nearestLocation = gl.getUniformLocation(display, "nearestSource")
    const linearLocation = gl.getUniformLocation(display, "linearSource")
    const signalLocation = gl.getUniformLocation(display, "nativeSignal")
    const signalMode = gl.getUniformLocation(signal, "mode")
    const signalSourceSize = gl.getUniformLocation(signal, "sourceSize")
    const signalNearest = gl.getUniformLocation(signal, "nearestSource")
    const signalLinear = gl.getUniformLocation(signal, "linearSource")
    return {
      draw(frame: number, mode: number, divider: number) {
        const width = Math.max(1, Math.min(maxWidth, Math.round(canvas.getBoundingClientRect().width * Math.min(devicePixelRatio, 2))))
        const height = Math.round(width / aspect)
        if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height }
        for (const unit of [0, 1, 2]) { gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, null); gl.bindSampler(unit, null) }
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer); gl.viewport(0, 0, sourceWidth, sourceHeight)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)
        activate(scene)
        if (options.source && videoTexture) {
          gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, videoTexture)
          if (options.source.video.readyState >= 2) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, options.source.video)
          gl.uniform1i(videoLocation, 0)
        } else gl.uniform1i(frameLocation, frame)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, signalTexture, 0)
        for (const unit of [0, 1]) { gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, texture); gl.bindSampler(unit, samplers[unit]) }
        if (mode >= 4) {
          activate(signal); gl.uniform1i(signalMode, mode); gl.uniform2f(signalSourceSize, sourceWidth, sourceHeight)
          gl.uniform1i(signalNearest, 0); gl.uniform1i(signalLinear, 1)
          gl.drawArrays(gl.TRIANGLES, 0, 6)
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, width, height); activate(display)
        gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, signalTexture); gl.bindSampler(2, samplers[1])
        gl.uniform1i(signalLocation, 2)
        gl.uniform1i(nearestLocation, 0); gl.uniform1i(linearLocation, 1)
        gl.uniform2f(sizeLocation, width, height); gl.uniform2f(displaySourceSize, sourceWidth, sourceHeight)
        gl.uniform1f(curvatureLocation, curvature); gl.uniform1i(modeLocation, mode); gl.uniform1f(dividerLocation, divider)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
      },
      dispose,
    }
  } catch (error) { dispose(); throw error }
}
