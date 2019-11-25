class Circle extends Geometry {
  constructor(shader, x, y) {
      super(shader);

      this.vertices = this.generateCircleVertices(x, y);
      this.faces = {0: [0, 1, 2]};

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateCircleVertices(x, y) {
      var vertices = []
      var x = (2*x/400) - 1;
      var y = 1 - (2*y/400);
      console.log(x, y);
      var size = document.getElementById("size").value;
      var seg = document.getElementById('count').value;
      console.log(seg);
      var deg = 360 / seg;
      var rx = x + size * 0.25;
      var ry = y;

      for(var i = 1; i <= seg * 2; i++){
         var lx = x + size * 0.25 * Math.cos(deg * i * Math.PI / 180);
         var ly = y + size * 0.25 * Math.sin(deg * i * Math.PI / 180);
         // Vertex 0
         var vertex0 = new Vertex(lx, ly, 0.0);
         vertices.push(vertex0);

         // Vertex1
         var vertex1 = new Vertex(rx, ry, 0.0);
         vertices.push(vertex1);

         // Vertex 2
         var vertex2 = new Vertex(x, y, 0.0);
         vertices.push(vertex2);

         rx = lx;
         ry = ly;
      }
      return vertices;
   }
}