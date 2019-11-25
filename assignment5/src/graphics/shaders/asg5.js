// Vertex Shader
var ASG5_VSHADER =
  `precision mediump float;
  attribute vec4 a_Position;
  varying vec3 v_Position;
  attribute vec4 a_Normal;
  varying vec3 v_Normal;
  attribute vec4 a_Color;
  varying vec4 v_Color;
  attribute vec2 a_TexCoord;
  varying vec2 v_TexCoord;
  
  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;

  uniform mat4 u_ModelMatrix;
  uniform mat4 u_NormalMatrix;

  void main() {
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;
    v_Position = vec3(a_Position);
    v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));
    gl_Position = u_ProjectionMatrix * u_ViewMatrix * a_Position;
  }`;

// Fragment Shader
var ASG5_FSHADER =
`precision mediump float;
  varying vec4 v_Color;
  varying vec3 v_Normal;
  varying vec3 v_Position;
  varying vec2 v_TexCoord;

  uniform sampler2D u_Sampler;

  uniform vec3 u_DiffuseColor;
  uniform vec3 u_AmbientColor;
  uniform vec3 u_SpecularColor;
  uniform vec3 u_LightPosition;
  uniform vec3 u_EyePosition;
 
  void main() {
    vec3 normal = normalize(v_Normal);
    vec3 lightDirection = normalize(u_LightPosition - v_Position);
    vec3 reflectDirection = reflect(-lightDirection, normal);
    vec3 viewDirection = normalize(u_EyePosition - v_Position );
    float nDotL = max(dot(lightDirection, normal), 0.0);
    float sp = pow(max(dot(reflectDirection, viewDirection),0.0),120.0);
    vec4 baseColor = texture2D(u_Sampler, v_TexCoord);
    
    vec3 diffuse = u_DiffuseColor * baseColor.rgb * nDotL;
    vec3 ambient = u_AmbientColor * baseColor.rgb;
    vec3 specular = u_SpecularColor * sp * baseColor.rgb;
    //gl_FragColor = vec4(viewDirection, 1.0);
    //gl_FragColor = texture2D(u_Sampler, v_TexCoord);
    //gl_FragColor = v_Color;
    vec3 final_color = diffuse + ambient + specular;
    gl_FragColor = vec4(final_color, baseColor.a);
  }`;
  

  // Vertex Shader
var ASG5_VSHADER_C =
  `precision mediump float;
  attribute vec4 a_Position;
  varying vec3 v_Position;
  attribute vec4 a_Normal;
  varying vec3 v_Normal;
  attribute vec4 a_Color;
  varying vec4 v_Color;
  attribute vec2 a_TexCoord;
  varying vec2 v_TexCoord;
  
  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;

  uniform mat4 u_ModelMatrix;
  uniform mat4 u_NormalMatrix;

  void main() {
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;
    v_Position = vec3(a_Position);
    v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));
    gl_Position = u_ProjectionMatrix * u_ViewMatrix * a_Position;
  }`;
  
// Fragment Shader
var ASG5_FSHADER_C =
  `precision mediump float;
  varying vec4 v_Color;
  varying vec3 v_Normal;
  varying vec3 v_Position;
  varying vec2 v_TexCoord;

  uniform sampler2D u_Sampler;

  uniform vec3 u_DiffuseColor;
  uniform vec3 u_AmbientColor;
  uniform vec3 u_SpecularColor;
  uniform vec3 u_LightPosition;
  uniform vec3 u_EyePosition;
 
  void main() {
    vec3 normal = normalize(v_Normal);
    vec3 lightDirection = normalize(u_LightPosition - v_Position);
    vec3 reflectDirection = reflect(-lightDirection, normal);
    vec3 viewDirection = normalize(u_EyePosition - v_Position );
    float nDotL = max(dot(lightDirection, normal), 0.0);
    float sp = pow(max(dot(reflectDirection, viewDirection),0.0),120.0);
    vec3 diffuse = u_DiffuseColor * v_Color.rgb * nDotL;
    vec3 ambient = u_AmbientColor * v_Color.rgb;
    vec3 specular = u_SpecularColor * sp * v_Color.rgb;
    //gl_FragColor = vec4(viewDirection, 1.0);
    //gl_FragColor = texture2D(u_Sampler, v_TexCoord);
    //gl_FragColor = v_Color;
    vec3 final_color = diffuse + ambient + specular;
    gl_FragColor = vec4(final_color, v_Color.a);
  }`;
