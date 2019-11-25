class Square extends Geometry {
  constructor(shader, x, y) {
      super(shader);

      this.vertices = this.generateSquareVertices(x, y);
      this.faces = {0: [0, 1, 2]};

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateSquareVertices(x, y) {
      var vertices = []
      var x = (2*x/400) - 1;
      var y = 1 - (2*y/400);
      console.log(x, y, "square");
      var size = document.getElementById("size").value;

      // Vertex 0
      var vertex0 = new Vertex(x-0.25*size, y+0.25*size, 0.0);

      // Vertex1
      var vertex1 = new Vertex(x+0.25*size, y+0.25*size, 0.0);
      
      // Vertex 2
      var vertex2 = new Vertex(x-0.25*size, y-0.25*size, 0.0);

      // Vertex 3
      var vertex3 = new Vertex(x+0.25*size, y-0.25*size, 0.0);

      // Push vertices for first tri
      vertices.push(vertex0);
      vertices.push(vertex1);
      vertices.push(vertex2);

      // Push certices for another tri
      vertices.push(vertex2);
      vertices.push(vertex1);
      vertices.push(vertex3);


      return vertices;
   }
}