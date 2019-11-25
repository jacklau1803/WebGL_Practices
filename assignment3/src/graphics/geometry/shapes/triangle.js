/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Triangle}
 */
class Triangle extends Geometry {
  /**
   * Constructor for Triangle.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Triangle} Triangle created
   */
  constructor(shader, x, y) {
      super(shader);
      this.vertices = this.generateTriangleVertices(x, y);
      this.faces = {0: [0, 1, 2]};
      this.translationMatrix = new Matrix4();
      this.translationMatrix.setTranslate(x,y,0);

      this.translationMatrix_ = new Matrix4();
      this.translationMatrix_.setTranslate(-x,-y,0);

      

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateTriangleVertices(x, y) {
      var vertices = [];
      console.log(x, y);
      var size = document.getElementById("size").value;
      // Vertex 0
      var vertex0 = new Vertex(x-0.25*size, y-0.25*size, 0.0);
     
      // Vertex1
      var vertex1 = new Vertex(x+0.25*size, y-0.25*size, 0.0);
     
      // Vertex 2
      var vertex2 = new Vertex(x+0.0, y+0.25*size, 0.0);
      
      if (window.rainbow){
        vertex0.color = [Math.random(),Math.random(), Math.random()];
        vertex2.color = [Math.random(),Math.random(), Math.random()];
        vertex1.color = [Math.random(),Math.random(), Math.random()];
      }
      vertices.push(vertex0);
      vertices.push(vertex1);
      vertices.push(vertex2);

      return vertices;
   }
   render() {
    this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);
    this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_);

    this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements); 
       
   }
}
