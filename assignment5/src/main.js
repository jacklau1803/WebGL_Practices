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
  var light = new Light(15,50,16);
  scene.setLight(light);
  
  var inputHandler = new InputHandler(canvas, scene, camera);

  // Initialize shader
  shader = new Shader(gl, ASG5_VSHADER, ASG5_FSHADER);
  
  shader_c = new Shader(gl, ASG5_VSHADER_C,ASG5_FSHADER_C);

  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");
  shader.addAttribute("a_TexCoord");
  shader.addAttribute("a_Normal");

  shader.addUniform("u_Sampler", "sampler2D", new Matrix4().elements);
  shader.addUniform("u_ViewMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_ProjectionMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_ModelMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_NormalMatrix", "mat4", new Matrix4().elements);
  
  shader.addUniform("u_LightPosition", "vec3", new Vector3().elements);
  shader.addUniform("u_EyePosition", "vec3", new Vector3().elements);
  shader.addUniform("u_AmbientColor", "vec3", new Vector3().elements);
  shader.addUniform("u_DiffuseColor", "vec3", new Vector3().elements);
  shader.addUniform("u_SpecularColor", "vec3", new Vector3().elements);

  
    // Add attibutes
  shader_c.addAttribute("a_Position");
  shader_c.addAttribute("a_Color");
  shader_c.addAttribute("a_TexCoord");
  shader_c.addAttribute("a_Normal");

  shader_c.addUniform("u_Sampler", "sampler2D", new Matrix4().elements);
  shader_c.addUniform("u_ViewMatrix", "mat4", new Matrix4().elements);
  shader_c.addUniform("u_ProjectionMatrix", "mat4", new Matrix4().elements);
  shader_c.addUniform("u_ModelMatrix", "mat4", new Matrix4().elements);
  shader_c.addUniform("u_NormalMatrix", "mat4", new Matrix4().elements);
  
  shader_c.addUniform("u_LightPosition", "vec3", new Vector3().elements);
  shader_c.addUniform("u_EyePosition", "vec3", new Vector3().elements);
  shader_c.addUniform("u_AmbientColor", "vec3", new Vector3().elements);
  shader_c.addUniform("u_DiffuseColor", "vec3", new Vector3().elements);
  shader_c.addUniform("u_SpecularColor", "vec3", new Vector3().elements);


  
 
  // Load texture and add triangle to the scene with that texture.
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
         var shape = new SkyCube(shader, 16, 16, 16, 16, image);
        scene.addGeometry(shape);
    })
    
  // Load spheres
  var shape = new Sphere(shader_c, 40, 13, 2, 10);
  scene.addGeometry(shape);
  
  var shape = new Sphere(shader_c, 40, 29, 2, 20);
  scene.addGeometry(shape);
 
  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, camera);
  renderer.start();
}
