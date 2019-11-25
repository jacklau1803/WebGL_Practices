var _inputHandler = null;
var projection_mode = 0;

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
    constructor(canvas, scene, camera) {
      this.canvas = canvas;
      this.scene  = scene;
      this.camera = camera;

      _inputHandler = this;

      // Keyboard Events
      document.addEventListener('keydown', function(ev) { _inputHandler.keyDown(ev); }, false);
      document.addEventListener('keyup',   function(ev) { _inputHandler.keyUp(ev);   }, false);
      this.mouseStatus = 1;

      this.canvas.onmousedown = function(ev) { _inputHandler.mouseDown(ev); };
      this.canvas.onmouseup = function() { _inputHandler.mouseUp(); };
      this.canvas.onmousemove = function(ev) { _inputHandler.mouseMove(ev); };
      this.canvas.onwheel = function(ev) { _inputHandler.mouseWheel(ev); };
    }

    keyUp(ev) {
        var keyName = event.key;
        console.log("key up", keyName);
    }

    keyDown(ev) {
        var keyName = event.key;
        if(keyName == "a") {
            this.camera.truck(-1);
        }
        else if(keyName == "d") {
            this.camera.truck(1);
        }
        else if(keyName == "w") {
            this.camera.dolly(-1);
        }
        else if(keyName == "s") {
            this.camera.dolly(1);
        }
        else if(keyName == "z") {
            this.camera.zoom(1);
        }
        else if(keyName == "x") {
            this.camera.zoom(-1);
        }
    }
    mouseDown(ev) {
        this.mouseStatus = 2;
    }

    mouseUp(ev) {
        this.mouseStatus = 1;
    }

    mouseMove(ev) {
        if (this.mouseStatus == 2) {
          this.camera.pan(ev.movementX);
          this.camera.tilt(ev.movementY);
        }
    }

    mouseWheel(ev) {
        this.camera.zoom(ev.deltaY);
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
            alert(fileReader.result);
        }
    }

    readTexture(src, onTexLoad) {
        // Create the image object
        var image = new Image();
        if (!image) {
          console.log('Failed to create the image object');
          return false;
        }

        // Register the event handler to be called on loading an image
        image.onload = function() {
            _inputHandler.image = image;
            onTexLoad(image);
        };

        // Tell the browser to load an image
        image.src = src
        return true;
    }
}
