import { advancedDisplayFunctions, nativeColorFunctions } from "./display-advanced-shaders"

// Adapted from Retropa's project-owned VintageTVHomebrewSource.metal.
export const vertexShader = `#version 300 es
in vec2 position;
out vec2 uv;
void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }
`

export const sceneShader = `#version 300 es
precision highp float;
precision highp int;
uniform int frame;
out vec4 outputColor;
bool inside(ivec2 p, ivec2 o, ivec2 s) { return all(greaterThanEqual(p,o)) && all(lessThan(p,o+s)); }
void rect(inout vec3 c, ivec2 p, ivec2 o, ivec2 s, vec3 v) { if (inside(p,o,s)) c=v; }
float hash21(ivec2 p) {
  uint v = uint(p.x)*1103515245u + uint(p.y)*12345u + 0x9e3779b9u;
  v ^= v >> 16; v *= 0x7feb352du; v ^= v >> 15;
  return float(v & 0xffffu)/65535.0;
}
void heart(inout vec3 c, ivec2 p, ivec2 o) {
  ivec2 q=p-o;
  if ((q.y==0 && (q.x==1 || q.x==3)) || (q.y>=1 && q.y<=2 && q.x>=0 && q.x<=4) || (q.y==3 && q.x>=1 && q.x<=3) || (q.y==4 && q.x==2)) c=vec3(.98,.20,.25);
}
void player(inout vec3 c, ivec2 p, ivec2 o) {
  int stride=(frame/8)&1;
  rect(c,p,o+ivec2(5,0),ivec2(8,3),vec3(.12,.07,.04));
  rect(c,p,o+ivec2(3,3),ivec2(12,8),vec3(.95,.66,.35));
  rect(c,p,o+ivec2(3,3),ivec2(4,4),vec3(.16,.09,.05));
  rect(c,p,o+ivec2(10,5),ivec2(2,2),vec3(.05,.08,.12));
  rect(c,p,o+ivec2(4,11),ivec2(10,10),vec3(.10,.66,.78));
  rect(c,p,o+ivec2(1,13),ivec2(4,7),vec3(.95,.66,.35));
  rect(c,p,o+ivec2(14,13),ivec2(4,7),vec3(.95,.66,.35));
  rect(c,p,o+ivec2(5+stride,21),ivec2(4,7),vec3(.13,.18,.28));
  rect(c,p,o+ivec2(10-stride,21),ivec2(4,7),vec3(.13,.18,.28));
  rect(c,p,o+ivec2(17,12),ivec2(9,2),vec3(.82,.86,.92));
  rect(c,p,o+ivec2(24,10),ivec2(2,6),vec3(.98,.78,.20));
}
void enemy(inout vec3 c, ivec2 p, ivec2 o) {
  int bounce=(frame/10)&1;
  rect(c,p,o+ivec2(2,2-bounce),ivec2(14,9),vec3(.58,.18,.76));
  rect(c,p,o+ivec2(0,7-bounce),ivec2(18,8),vec3(.42,.10,.60));
  rect(c,p,o+ivec2(4,6-bounce),ivec2(3,3),vec3(.95,.88,.40));
  rect(c,p,o+ivec2(11,6-bounce),ivec2(3,3),vec3(.95,.88,.40));
  rect(c,p,o+ivec2(1,15-bounce),ivec2(5,3),vec3(.22,.05,.32));
  rect(c,p,o+ivec2(12,15-bounce),ivec2(5,3),vec3(.22,.05,.32));
}
void main() {
  ivec2 p=ivec2(int(gl_FragCoord.x),239-int(gl_FragCoord.y));
  float sky=clamp(float(p.y)/175.0,0.0,1.0);
  vec3 c=mix(vec3(.015,.025,.10),vec3(.10,.18,.34),sky);
  int offset=(frame/3)%380-60;
  if (p.y>38 && p.y<56) { int x=(p.x+offset)%380; if ((x>20 && x<66)||(x>180 && x<232)) c=vec3(.28,.40,.60); }
  ivec2 m=p-ivec2(264,44);
  if (m.x*m.x+m.y*m.y<324) c=vec3(.88,.92,.72);
  if (p.y<120 && hash21(p/3)>.985) c=vec3(.65,.90,1.0);
  int a=120-abs(p.x-86)*3/5; int b=132-abs(p.x-220)*2/3;
  if (p.y>a && p.y<176) c=vec3(.07,.10,.20);
  if (p.y>b && p.y<176) c=vec3(.05,.08,.16);
  if (p.y>=175) c=(((p.x+frame/2)/16+p.y/12)&1)==0 ? vec3(.08,.18,.20) : vec3(.11,.25,.24);
  if (p.y>=201) c=((p.x/10+p.y/7)&1)==0 ? vec3(.05,.07,.10) : vec3(.08,.10,.13);
  player(c,p,ivec2(140,146-((frame/8)&1)));
  int enemyX=330-(frame%150)*2; if(enemyX< -24) enemyX+=360;
  enemy(c,p,ivec2(enemyX,158));
  ivec2 coin=p-ivec2(42+(frame*2)%230,137+int(sin(float(frame)*.09)*5.0));
  if(coin.x*coin.x+coin.y*coin.y<36) c=vec3(1.0,.78,.12);
  rect(c,p,ivec2(8,8),ivec2(92,20),vec3(.025,.035,.08));
  heart(c,p,ivec2(16,14)); heart(c,p,ivec2(27,14)); heart(c,p,ivec2(38,14));
  rect(c,p,ivec2(56,14),ivec2(35,4),vec3(.15,.76,.82));
  rect(c,p,ivec2(56,20),ivec2(24,3),vec3(.94,.42,.18));
  outputColor=vec4(c,1.0);
}
`

// NativeFilterEffectCRT/LCD/Scanline formulas; LCD temporal PWM is omitted on web.
export const displayShader = `#version 300 es
precision highp float;
uniform sampler2D nearestSource;
uniform sampler2D linearSource;
uniform sampler2D nativeSignal;
uniform vec2 outputSize;
uniform int mode;
uniform float divider;
in vec2 uv;
out vec4 outputColor;
const vec2 sourceSize=vec2(320.0,240.0);
${nativeColorFunctions}
${advancedDisplayFunctions}
float scan(float axis,float count,float strength,float exponent) {
  float phase=1.0-abs(fract(axis*count)-.5)*2.0;
  return mix(1.0-strength,1.0,pow(max(phase,0.0),exponent));
}
float response(float a,float b) { return smoothstep(a,b,max(1.0,min(outputSize.x/320.0,outputSize.y/240.0))); }
void main() {
  // Barrel projection supplies convex glass depth; the shared DOM contour owns clipping.
  vec2 centered=uv*2.0-1.0;
  vec2 bowed=centered*(1.0+.12*dot(centered,centered))/1.12;
  vec2 p=clamp(bowed*.5+.5,vec2(0.0),vec2(1.0));
  vec3 nearest=texture(nearestSource,p).rgb;
  vec3 c=nearest;
  if (mode==1) {
    float r=response(2.0,5.0);
    c=mix(nearest,texture(linearSource,p).rgb,.20+.08*r);
    float s=scan(p.y,240.0,mix(.06,.18,r),mix(1.45,2.35,r));
    float mask=scan(p.x,320.0*mix(1.0,1.35,r),mix(.015,.05,r),1.35);
    vec2 ellipse=(p*2.0-1.0)*vec2(.92,1.04);
    float vignette=clamp(1.0-dot(ellipse,ellipse)*mix(.045,.085,r),.86,1.0);
    c*=s*mask*vignette*(1.0+luma(c)*.035)*vec3(1.01,.995,.97);
  } else if (mode==2) {
    float r=response(1.5,4.0);
    float scale=max(1.0,round(min(outputSize.x/320.0,outputSize.y/240.0)));
    vec2 grid=sourceSize*scale;
    vec3 right=texture(nearestSource,clamp(p+vec2(1.0/320.0,0.0),0.0,1.0)).rgb;
    vec3 left=texture(nearestSource,clamp(p-vec2(1.0/320.0,0.0),0.0,1.0)).rgb;
    c=vec3(mix(nearest.r,right.r,.05),mix(nearest.g,(left.g+right.g)*.5,.02),mix(nearest.b,left.b,.05));
    float sub=fract(p.x*grid.x*3.0);
    vec3 mask=vec3(mix(.88,.82,r));
    if(sub<1.0/3.0) mask.r=.99; else if(sub<2.0/3.0) mask.g=.985; else mask.b=.99;
    vec2 gate=smoothstep(vec2(0.0),vec2(1.0),1.0-abs(fract(p*grid)-.5)*2.0);
    c*=mask*(mix(.90,.78,r)+mix(.10,.22,r)*gate.y)*(mix(.94,.88,r)+mix(.06,.12,r)*gate.x)*vec3(1.015,.98,1.025);
  } else if (mode==3) {
    float r=response(1.5,4.5);
    c=mix(nearest,texture(linearSource,p).rgb,.14);
    c*=scan(p.y,240.0,mix(.05,.14,r),mix(1.15,1.9,r))*scan(p.x,320.0,mix(.01,.03,r),1.2);
    c*=1.0+luma(c)*.012;
  } else if(mode==4) c=crtV4(p);
  else if(mode==5) c=trinitron(p);
  else if(mode==6) c=dmg(p);
  if (uv.x<divider) c=nearest;
  float glassFalloff=1.0-.12*smoothstep(.35,1.75,dot(centered,centered));
  outputColor=vec4(clamp(c*glassFalloff,0.0,1.0),1.0);
}
`
