// Vertex Shader
var ASG4_VSHADER =
  `precision mediump float;
  attribute vec4 a_Position;
  attribute vec4 a_Color;
  varying vec4 v_Color;
  attribute vec2 a_TexCoord;
  varying vec2 v_TexCoord;
  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;

  void main() {
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;
    gl_Position = u_ProjectionMatrix * u_ViewMatrix * a_Position;
  }`;

// Fragment Shader
var ASG4_FSHADER =
  `precision mediump float;
  varying vec4 v_Color;
  varying vec2 v_TexCoord;

  uniform sampler2D u_Sampler;

  void main() {
    gl_FragColor = texture2D(u_Sampler, v_TexCoord);
  }`;

  // Vertex Shader
var FOG_VSHADER =
  `precision mediump float;
  attribute vec4 a_Position;
  attribute vec4 a_Color;
  varying vec4 v_Color;
  attribute vec2 a_TexCoord;
  varying vec2 v_TexCoord;
  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;
  uniform vec4 u_Eye;
  varying float v_Dist;

  void main() {
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;
    gl_Position = u_ProjectionMatrix * u_ViewMatrix * a_Position;
    v_Dist = distance(a_Position, u_Eye);
  }`;

// Fragment Shader
var FOG_FSHADER =
  `precision mediump float;
  varying vec4 v_Color;
  varying vec2 v_TexCoord;
  
  uniform vec3 u_FogColor;
  uniform vec3 u_FogDist;
  varying float v_Dist;

  uniform sampler2D u_Sampler;

  void main() {
    vec4 baseColor = texture2D(u_Sampler, v_TexCoord);
    vec2 fog_dist = vec2(u_FogDist);
    float fogFactor = (fog_dist.y - v_Dist) / (fog_dist.y - fog_dist.x);
    //float fogFactor = (u_FogDist.y - v_Dist) / (u_FogDist.y - u_FogDist.x);
    vec3 color = mix(u_FogColor, vec3(baseColor), clamp(fogFactor, 0.0, 1.0));
    gl_FragColor = vec4(color,baseColor.a);
    //gl_FragColor = vec4(u_FogColor, 1.0);
  }`;
