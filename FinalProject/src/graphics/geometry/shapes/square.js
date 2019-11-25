/**
 * Specifies a triangle. A subclass of geometry.
 *
 * Copy from triangle.js from basecode
 * @author Lucas N. Ferreira
 * @this {Square}
 */
class Square extends Geometry {
  /**
   * Constructor for Triangle.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Square} Square created
   */
  constructor(shader, x, y, z, image) {
      super(shader);

      this.vertices = this.generateSquareVertices(x, y, z);
      this.faces = {0: this.vertices};
      this.image = image;
      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
      
  }
  


  generateSquareVertices(x, y, z) {
      var vertices = [];

      // Vertex 0
      var vertex0 = new Vertex(x-16, y, z-16);
      vertex0.texCoord = [1.0, 1.0];

      // Vertex1
      var vertex1 = new Vertex(x-16, y, z+16);
      vertex1.texCoord = [1.0, 0.0];

      // Vertex 2
      var vertex2 = new Vertex(x+16, y, z+16);
      vertex2.texCoord = [0.0, 0.0];

      // Vertex 3
      var vertex3 = new Vertex(x-16, y, z-16);
      vertex3.texCoord = [1.0, 1.0];

      // Vertex 4
      var vertex4 = new Vertex(x+16, y, z+16);
      vertex4.texCoord = [0.0, 0.0];

      // Vertex 5
      var vertex5 = new Vertex(x+16, y, z-16);
      vertex5.texCoord = [0.0, 1.0];

      vertices.push(vertex0);
      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      vertices.push(vertex4);
      vertices.push(vertex5);

      
      return vertices;
  }
  
}


