import { nativeColorFunctions } from "./display-advanced-shaders"

// Source-sized native signal approximation. Temporal history stays native-only.
export const signalShader = `#version 300 es
precision highp float;
uniform sampler2D nearestSource;
uniform sampler2D linearSource;
uniform int mode;
in vec2 uv;
out vec4 outputColor;
${nativeColorFunctions}
vec3 readLinear(vec2 p) { return toLinear(texture(linearSource,clamp(p,0.0,1.0)).rgb); }
void main() {
  vec2 dx=vec2(1.0/320.0,0); vec2 dy=vec2(0,1.0/240.0);
  vec3 c=readLinear(uv);
  vec3 horizontal=(readLinear(uv-dx)+readLinear(uv+dx))*.5;
  vec3 vertical=(readLinear(uv-dy)+readLinear(uv+dy))*.5;
  if(mode==6) {
    float center=pow(clamp(luma(c)*1.08,0.0,1.0),1.0/1.12);
    float cross=0.0; float diagonal=0.0; float low=center; float high=center;
    for(int y=-1;y<=1;y++) for(int x=-1;x<=1;x++) {
      if(x==0&&y==0) continue;
      float v=pow(clamp(luma(readLinear(uv+float(x)*dx+float(y)*dy))*1.08,0.0,1.0),1.0/1.12);
      low=min(low,v); high=max(high,v);
      if(x==0||y==0) cross+=v*.25; else diagonal+=v*.25;
    }
    float weight=.32*(1.0-smoothstep(.10,.40,high-low))*mix(.28,1.0,1.0-abs(center*2.0-1.0));
    outputColor=vec4(vec3(quantized(mix(center,center*.48+cross*.34+diagonal*.18,weight))),1.0);
    return;
  }
  if(mode==5) {
    c=max(c+(c-horizontal*.7-vertical*.3)*.14,0.0);
    c=vec3(luma(c))+mix(c-vec3(luma(c)),horizontal-vec3(luma(horizontal)),.17);
    c=mix(vec3(luma(c)),c,1.06);
    float gate=smoothstep(.003,.035,luma(c));
    c=max(c*1.08*gate,0.0);
    c=c/(1.0+c*.17);
  } else {
    c=c+(c-horizontal)*.12+(c-vertical)*.12*.28;
    c=vec3(luma(max(c,0.0)))+(c-vec3(luma(max(c,0.0))))*1.02;
    c=max(c*1.04-.003,0.0);
    c=c/(1.0+c*.10)*1.02;
    c=c/(1.0+c*.14);
  }
  outputColor=vec4(c,1.0);
}
`
