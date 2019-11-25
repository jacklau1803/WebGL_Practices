var _inputHandler = null;

/**
 * Specifies a Input Handler. Used to parse input events from a HTML page.
 *
 * @author Lucas N. Ferreira
 * @this {Scene}
 */
class InputHandler {
    /**
     * Initializes the event handeling functions within the program.
     */
    constructor(canvas, scene) {
      this.canvas = canvas;
      this.scene = scene;

      _inputHandler = this;

      this.image = null;

      // Mouse Events
      canvas.onmousedown = function(ev){
        _inputHandler.click(ev);
        canvas.onmousemove = function(ev){
          _inputHandler.click(ev);
        };
      }; 
      canvas.onmouseup = function(ev){
        canvas.onmousemove = function(ev){
        };
      }; 

      // Button Events
      document.getElementById('fileLoad').onclick = function() { _inputHandler.readSelectedFile() };
      document.getElementById('texInput').onchange = function() { _inputHandler.image = _inputHandler.readTexture(); };
      document.getElementById("clear").onclick = function() {
        scene.clearGeometries();
        console.log("Canvas cleared");
        shader.uniformLocations = [];
        tshader.uniformLocations = [];
      };
      document.getElementById("triangle").onclick = function() {
       window.test = 0;
       console.log("tri");
      };
      document.getElementById("square").onclick = function() {
        window.test = 1;
       console.log("squ");
      };
      document.getElementById("circle").onclick = function() {
       window.test = 2;
       console.log("cir");
      };
      document.getElementById("cube").onclick = function() {
        window.test = 3;
        console.log("cube");
      };

      // Button Events
      document.getElementById('fileLoad').onclick = function() { _inputHandler.readSelectedFile() };

      document.getElementById('texInput').onchange = function() { _inputHandler.image = _inputHandler.readTexture(); };

    }

    /**
     * Function called upon mouse click.
     */
    click(ev) {
        // Print x,y coordinates.
        console.log(ev.clientX, ev.clientY);
        var x = ev.clientX;
        var y = ev.clientY;
        var x = (2*x/400) - 1;
        var y = 1 - (2*y/400);
        document.getElementById('x-axis').innerHTML = x;
        document.getElementById('y-axis').innerHTML = y;
        if(window.test == 0){
          var shape = new Triangle(shader, x, y);
        }else if(window.test == 1){
          var shape = new Square(shader, x, y);
        }else if(window.test == 2){
          var shape = new Circle(shader, x, y);
        }else{
          if(_inputHandler.image == null){
            var shape = new Cube(shader, x, y);
          }else{
            var shape = new Default(tshader, x, y, _inputHandler.image);
          }
        }
        this.scene.addGeometry(shape);
    }

    /**
     * Function called to read a selected file.
     */
    readSelectedFile() {
        var fileReader = new FileReader();
        var objFile = document.getElementById("fileInput").files[0];

        if (!objFile) {
            alert("OBJ file not set!");
            return;
        }

        fileReader.readAsText(objFile);
        fileReader.onloadend = function() {
            // alert(fileReader.result);
            var customObj = new CustomOBJ(shader, fileReader.result);
            _inputHandler.scene.addGeometry(customObj);
        }
    }

    readTexture() {
        // Create the image object
        var image = new Image();
        if (!image) {
          console.log('Failed to create the image object');
          return;
        }

        // Register the event handler to be called on loading an image
        image.onload = function() {
            _inputHandler.image = image;
        };

        var imgPath = document.getElementById("texInput").value;
        var imgPathSplit = imgPath.split("\\");

        // Tell the browser to load an image
        image.src = 'objs/' + imgPathSplit[imgPathSplit.length - 1];
        return image;
    }
}
