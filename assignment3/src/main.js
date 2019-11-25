var shader = null;
var tshader = null
window.rainbow = false;
function main() {
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");

  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  // Initialize the scene
  window.test = 0;
  var scene = new Scene();
  var inputHandler = new InputHandler(canvas, scene);

  // Initialize shader
  shader = new Shader(gl, ASG1_VSHADER, ASG1_FSHADER);
  tshader = new Shader(gl, ASG3_VSHADER, ASG3_FSHADER);

  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");
  tshader.addAttribute("a_Position");
  tshader.addAttribute("a_Color");
  tshader.addAttribute("a_TexCoord");

  // Add uniforms
  var idMatrix = new Matrix4();
  shader.addUniform("u_ModelMatrix", "mat4", idMatrix.elements);
  tshader.addUniform("u_ModelMatrix", "mat4", idMatrix.elements);
  var def = new Image();
  def.src = "../assignment3/objs/sky.jpg";
  var shape = new Default(tshader, 0, 0, def);
  scene.addGeometry(shape);
  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, null);
  renderer.start();
}

function change(btn) {
  window.rainbow = !window.rainbow;
  if(window.rainbow){
    btn.value = "🌈RAINBOW🌈"
  }else{
    btn.value = "Solid Color😁"
  }
}
