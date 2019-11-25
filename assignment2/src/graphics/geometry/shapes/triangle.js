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
      this.rot = 0;
      this.time = 0;
      this.reverse = true;

      this.translationMatrix = new Matrix4();
      this.translationMatrix.setTranslate(x, y, 0);

      this.translationMatrix_ = new Matrix4();
      this.translationMatrix_.setTranslate(-x, -y, 0);

      this.scalingMatrix = new Matrix4();
      this.scalingMatrix.setScale(1.01,1.01,1.01);

      this.scalingMatrix_ = new Matrix4();
      this.scalingMatrix_.setScale(0.99,0.99,0.99);

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateTriangleVertices(x, y) {
      var vertices = [];

      var size = document.getElementById("size").value;
      // Vertex 0
      var vertex0 = new Vertex(x-0.25*size, y-0.25*size, 0.0);
      vertices.push(vertex0);

      // Vertex1
      var vertex1 = new Vertex(x+0.25*size, y-0.25*size, 0.0);
      vertices.push(vertex1);

      // Vertex 2
      var vertex2 = new Vertex(x, y+0.25*size, 0.0);
      vertices.push(vertex2);

      return vertices;
   }

   render() {
      this.time += 0.1;
      if(this.time >= 4) {
        this.reverse = !this.reverse;
        this.time = 0;
      }
      this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);
      if(this.reverse) {
        this.modelMatrix = this.modelMatrix.multiply(this.scalingMatrix);
      }
      else{
        this.modelMatrix = this.modelMatrix.multiply(this.scalingMatrix_);
      }

       this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_);
       this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
   }
}
