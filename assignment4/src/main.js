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
  var scene = new Scene();
  var camera = new Camera();

  var inputHandler = new InputHandler(canvas, scene, camera);

  // Initialize shader
  shader = new Shader(gl, ASG4_VSHADER, ASG4_FSHADER);

  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");
  shader.addAttribute("a_TexCoord");

  shader.addUniform("u_Sampler", "sampler2D", new Matrix4().elements);
  shader.addUniform("u_ViewMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_ProjectionMatrix", "mat4", new Matrix4().elements);
  // Load texture and add cubes.
  var map = [[4,4,4,4,4,4,4,4],
             [4,1,0,0,0,2,0,4],
             [4,0,0,0,0,0,0,4],
             [4,0,0,2,0,1,0,4],
             [4,0,0,0,0,0,0,4],
             [4,0,1,0,0,0,0,4],
             [4,0,0,0,0,0,0,4],
             [4,4,4,4,4,4,4,4],];
  inputHandler.readTexture("objs/nan.png", function(image) {
      for(var z =0; z< map.length; z++){
          for(var x = 0; x < map[z].length; x++){
              for(var y = 0; y < map[z][x]; y++){
                  var xp = (x * 4) + 2;
                  var yp = (y * 4) + 2;
                  var zp = (z * 4) + 2;
                  var shape = new Cube(shader, xp, yp, zp, 2, image);
                  scene.addGeometry(shape);
              } 
          }
      }
  })
  
    // Load texture and add square for making floor.
    inputHandler.readTexture("objs/floor.jpg", function(image) {
        var shape = new Square(shader,16, 0, 16, image);
        scene.addGeometry(shape);
    })
    
    // Load texture and add cube for sky
    inputHandler.readTexture("objs/sky.jpg", function(image) {
         var shape = new Cube(shader, 16, 16, 16, 16, image);
        scene.addGeometry(shape);
    })

  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, camera);
  renderer.start();
}
