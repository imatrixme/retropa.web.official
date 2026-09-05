import { displayShader, sceneShader, vertexShader } from "./display-shaders"
import { signalShader } from "./display-signal-shader"

export function createDisplayRenderer(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext("webgl2", { alpha: false, antialias: false, powerPreference: "low-power", preserveDrawingBuffer: true })
  if (!gl) throw new Error("WebGL2 unavailable")
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
    const scene = program(sceneShader)
    const signal = program(signalShader)
    const display = program(displayShader)
    const buffer = gl.createBuffer()!
    buffers.push(buffer); gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW)
    const texture = gl.createTexture()!
    textures.push(texture); gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, 320, 240, 0, gl.RGBA, gl.UNSIGNED_BYTE, null)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
    const signalTexture = gl.createTexture()!
    textures.push(signalTexture); gl.bindTexture(gl.TEXTURE_2D, signalTexture)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, 320, 240, 0, gl.RGBA, gl.UNSIGNED_BYTE, null)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
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
    const modeLocation = gl.getUniformLocation(display, "mode")
    const dividerLocation = gl.getUniformLocation(display, "divider")
    const sizeLocation = gl.getUniformLocation(display, "outputSize")
    const nearestLocation = gl.getUniformLocation(display, "nearestSource")
    const linearLocation = gl.getUniformLocation(display, "linearSource")
    const signalLocation = gl.getUniformLocation(display, "nativeSignal")
    const signalMode = gl.getUniformLocation(signal, "mode")
    const signalNearest = gl.getUniformLocation(signal, "nearestSource")
    const signalLinear = gl.getUniformLocation(signal, "linearSource")
    return {
      draw(frame: number, mode: number, divider: number) {
        const width = Math.max(1, Math.min(1440, Math.round(canvas.getBoundingClientRect().width * Math.min(devicePixelRatio, 2))))
        const height = Math.round(width * .75)
        if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height }
        for (const unit of [0, 1, 2]) { gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, null) }
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer); gl.viewport(0, 0, 320, 240)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)
        activate(scene); gl.uniform1i(frameLocation, frame); gl.drawArrays(gl.TRIANGLES, 0, 6)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, signalTexture, 0)
        for (const unit of [0, 1]) { gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, texture); gl.bindSampler(unit, samplers[unit]) }
        if (mode >= 4) {
          activate(signal); gl.uniform1i(signalMode, mode); gl.uniform1i(signalNearest, 0); gl.uniform1i(signalLinear, 1)
          gl.drawArrays(gl.TRIANGLES, 0, 6)
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, width, height); activate(display)
        gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, signalTexture); gl.bindSampler(2, samplers[1])
        gl.uniform1i(signalLocation, 2)
        gl.uniform1i(nearestLocation, 0); gl.uniform1i(linearLocation, 1)
        gl.uniform2f(sizeLocation, width, height); gl.uniform1i(modeLocation, mode); gl.uniform1f(dividerLocation, divider)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
      },
      dispose,
    }
  } catch (error) { dispose(); throw error }
}
