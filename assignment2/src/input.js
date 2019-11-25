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
      document.getElementById("clear").onclick = function() {
        scene.clearGeometries();
        console.log("Canvas cleared");
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
          var shape = new Cube(shader, x, y);
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
}
