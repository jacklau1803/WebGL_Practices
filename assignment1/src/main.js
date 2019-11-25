var shader = null;

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
  window.test = 0; // tri
  var scene = new Scene();
  var inputHandler = new InputHandler(canvas, scene);

  // Initialize shader
  shader = new Shader(gl, ASG1_VSHADER, ASG1_FSHADER);

  // Add attributes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");

  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, null);
  renderer.start();

  // Set buttons
  document.getElementById("clear").onclick = function() {
    scene.clearGeometries();
    console.log("Canvas cleared");
  };
  document.getElementById("triangle").addEventListener('click', function () {
      window.test = 0;
    },true)
  document.getElementById("square").addEventListener('click', function () {
      window.test = 1;
  },true)
    document.getElementById("circle").addEventListener('click', function () {
      window.test = -1;
    },true)

}
