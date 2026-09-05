// Native Metal references and omitted passes are documented in README.md.
export const nativeColorFunctions = `
float luma(vec3 c) { return dot(c,vec3(.299,.587,.114)); }
vec3 toLinear(vec3 c) { return mix(c/12.92,pow((c+.055)/1.055,vec3(2.4)),step(vec3(.04045),c)); }
vec3 toSrgb(vec3 c) { c=max(c,vec3(0.0)); return mix(c*12.92,1.055*pow(c,vec3(1.0/2.4))-.055,step(vec3(.0031308),c)); }
float quantized(float v) { return v<.18?0.0:v<.42?1.0/3.0:v<.70?2.0/3.0:1.0; }
`

export const advancedDisplayFunctions = `
float sinc(float v) { return abs(v)<.0001?1.0:sin(v)/v; }
float integratedCosine(float phase,float sigma) {
  vec2 delta=vec2(dFdx(phase),dFdy(phase));
  float box=sinc(delta.x*.5)*sinc(delta.y*.5);
  float optical=exp(-.5*sigma*sigma*dot(delta,delta));
  return cos(phase)*box*optical*(1.0-smoothstep(2.35,3.05,max(abs(delta.x),abs(delta.y))));
}
vec3 energyAt(vec2 p) { return texture(nativeSignal,clamp(p,0.0,1.0)).rgb; }
float vignette(vec2 p,float strength) {
  vec2 e=(p*2.0-1.0)*vec2(.92,1.04);
  return clamp(1.0-dot(e,e)*strength,.84,1.0);
}
vec3 bloomAt(vec2 p) {
  vec2 d=vec2(2.0)/sourceSize;
  vec3 glow=energyAt(p)*.28;
  glow+=(energyAt(p+vec2(d.x,0))+energyAt(p-vec2(d.x,0)))*.18;
  glow+=(energyAt(p+vec2(0,d.y))+energyAt(p-vec2(0,d.y)))*.18;
  return max(glow-.54,0.0)*.22*smoothstep(.54,.72,max(glow.r,max(glow.g,glow.b)));
}
vec3 crtV4(vec2 p) {
  vec2 coord=p*sourceSize-.5;
  float footprint=max(length(vec2(dFdx(coord.y),dFdy(coord.y))),.0001);
  float excitation=clamp(luma(energyAt(p)),0.0,1.0);
  float base=mix(.28,.43,excitation);
  float pixel=footprint*.28867513459;
  float sigma=sqrt(base*base+pixel*pixel+.045*.045);
  float coverBase=mix(.18,.245,excitation);
  float coverSigma=sqrt(coverBase*coverBase+pixel*pixel+.025*.025);
  float lineBase=floor(coord.y+.5);
  vec3 accumulated=vec3(0.0);
  float weights=0.0; float coverWeights=0.0;
  for(int i=-3;i<=3;i++) {
    float line=lineBase+float(i); float distance=coord.y-line;
    float weight=exp(-.5*distance*distance/(sigma*sigma));
    accumulated+=energyAt(vec2(p.x,(line+.5)/sourceSize.y))*weight;
    weights+=weight;
    coverWeights+=exp(-.5*distance*distance/(coverSigma*coverSigma));
  }
  float coverage=clamp(coverWeights/(2.50662827463*coverSigma),0.0,1.0);
  coverage=mix(1.0,coverage,.72*(1.0-smoothstep(.72,1.15,footprint)));
  float envelope=clamp(coverage+mix(.05,.12,excitation)*(1.0-coverage),0.0,1.0);
  float phase=coord.x*6.28318530718*.72;
  vec3 carrier=vec3(integratedCosine(phase,.40),integratedCosine(phase-2.09439510239,.40),integratedCosine(phase+2.09439510239,.40));
  float visibility=max(abs(carrier.r),max(abs(carrier.g),abs(carrier.b)));
  vec3 grille=mix(1.0,.95,.64*visibility)*(1.0+carrier*.64*mix(.08,.20,excitation)*visibility);
  vec3 color=accumulated/max(weights,.0001)*envelope*grille;
  color+=bloomAt(p)*mix(.14,.34,envelope);
  color=max(color*vignette(p,.08)*1.10-.002,0.0);
  return toSrgb(color/(1.0+color*.24));
}
float erfApprox(float v) {
  float x=abs(v); float x2=x*x;
  return sign(v)*sqrt(max(0.0,1.0-exp(-x2*(1.27323954474+.147*x2)/(1.0+.147*x2))));
}
float gaussianIntegral(float distance,float sigma,float height) {
  float inv=.70710678118/max(sigma,.045);
  return max(0.0,.5*(erfApprox((distance+height*.5)*inv)-erfApprox((distance-height*.5)*inv))/max(height,.0001));
}
float harmonicAttenuation(float phase,float harmonic) {
  vec2 delta=vec2(dFdx(phase),dFdy(phase))*harmonic;
  float gate=1.0-smoothstep(.34,.49,length(delta)*.15915494309);
  return clamp(sinc(delta.x*.5)*sinc(delta.y*.5)*exp(-.5*dot(delta,delta)*.0324)*gate,0.0,1.0);
}
vec3 trinitron(vec2 p) {
  vec2 coord=p*sourceSize-.5;
  float footprint=max(abs(dFdx(coord.y))+abs(dFdy(coord.y)),.0001);
  float base=floor(coord.y);
  float radial=clamp(dot(p*2.0-1.0,p*2.0-1.0),0.0,1.0);
  vec3 beam=vec3(0.0);
  for(int i=-3;i<=3;i++) {
    float line=base+float(i);
    vec2 lineUV=vec2(p.x,(line+.5)/sourceSize.y);
    vec3 c=vec3(energyAt(lineUV-vec2(.05/sourceSize.x,0)).r,energyAt(lineUV).g,energyAt(lineUV+vec2(.05/sourceSize.x,0)).b);
    float sigma=mix(.285,.475,pow(clamp(luma(c),0.0,1.0),.42))*mix(1.16,.90,.78)+radial*.10*.22;
    beam+=c*gaussianIntegral(coord.y-line,sigma,footprint);
  }
  float phase=p.x*sourceSize.x*.72*6.28318530718;
  vec3 channel=vec3(phase,phase-2.09439510239,phase-4.18879020479);
  vec3 carrier=cos(channel)*(.70*harmonicAttenuation(phase,1.0));
  carrier+=cos(channel*2.0)*(.22*harmonicAttenuation(phase,2.0));
  carrier+=cos(channel*3.0)*(.08*harmonicAttenuation(phase,3.0));
  vec3 grille=max(vec3(1.0-.075*.78)+carrier*.78*.19,vec3(.52));
  vec3 color=beam*grille+bloomAt(p)*.35;
  float wireWidth=max(fwidth(p.y)*.36,.35/outputSize.y);
  float wire=1.0-smoothstep(wireWidth*.35,wireWidth*1.55,min(abs(p.y-.335),abs(p.y-.665)));
  color*=1.0-wire*.045*smoothstep(120.0,300.0,outputSize.y);
  color=max(color*vignette(p,.075)*1.24-.002,0.0);
  return toSrgb(color/(1.0+color*.30));
}
float roundedCell(vec2 p,float inset,float radius,float feather) {
  vec2 q=abs(p*2.0-1.0)-(vec2(1.0-inset*2.0)-radius);
  float sdf=length(max(q,0.0))+min(max(q.x,q.y),0.0)-radius;
  return 1.0-smoothstep(-feather,feather,sdf);
}
float cellMask(vec2 coord,vec2 footprint,bool shadow) {
  float sum=0.0;
  for(int y=-1;y<=1;y++) for(int x=-1;x<=1;x++) {
    float weight=(x==0?.44444444444:.27777777778)*(y==0?.44444444444:.27777777778);
    vec2 cell=fract(coord+vec2(x,y)*footprint*.38729833462);
    if(shadow) cell-=vec2(.06,.08);
    float mask=roundedCell(cell,shadow?.10:.085,.30,.14);
    if(!shadow) mask*=mix(.90,1.0,1.0-smoothstep(.24,.94,length((cell-.5)*1.18)));
    sum+=mask*weight;
  }
  return sum;
}
vec3 dmg(vec2 p) {
  vec2 coord=p*sourceSize;
  vec2 center=(floor(coord)+.5)/sourceSize;
  float state=quantized(energyAt(center).r);
  float cell=cellMask(coord,fwidth(coord),false);
  float shadow=cellMask(coord,fwidth(coord),true);
  vec3 dark=toLinear(vec3(.16,.20,.10)); vec3 low=toLinear(vec3(.29,.37,.18));
  vec3 high=toLinear(vec3(.50,.60,.29)); vec3 bright=toLinear(vec3(.79,.84,.48));
  vec3 palette=state<.33334?mix(dark,low,state*3.0):state<.66667?mix(low,high,(state-1.0/3.0)*3.0):mix(high,bright,(state-2.0/3.0)*3.0);
  vec2 centered=p*2.0-1.0;
  float directional=dot(centered,normalize(vec2(-.38,.92)));
  vec3 board=mix(toLinear(vec3(.45,.57,.45)),toLinear(vec3(.73,.84,.74)),.60+directional*.03);
  board*=1.01-dot(centered*vec2(.88,1.06),centered*vec2(.88,1.06))*.024+directional*.016;
  vec3 liquid=mix(toLinear(vec3(.24,.33,.20)),toLinear(vec3(.90,.97,.88)),smoothstep(0.0,1.0,state));
  vec3 pixel=mix(toLinear(vec3(.16,.19,.10)),board*liquid,state);
  pixel=mix(pixel,palette,mix(.16,.28,state))*(1.0-(1.0-state)*shadow*.04);
  float transmission=smoothstep(.04,.94,cell);
  vec3 color=mix(board*(.94-(1.0-cell)*.08)*.94,pixel,transmission);
  color=mix(color,pixel,transmission*.18);
  return toSrgb(color*vignette(p,.07));
}
`
