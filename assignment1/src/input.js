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
      this.canvas.onmousedown = function(ev) { _inputHandler.click(ev) };
    }

    /**
     * Function called upon mouse click.
     */
    click(ev) {
        // Print x,y coordinates.

        console.log(ev.clientX, ev.clientY, window.test);
        if(window.test == 0){
          var shape = new Triangle(shader, ev.clientX, ev.clientY);
        }else if(window.test == 1){
          var shape = new Square(shader, ev.clientX, ev.clientY);
        }else{
          var shape = new Circle(shader, ev.clientX, ev.clientY);
        }
        this.scene.addGeometry(shape);
    }
}
