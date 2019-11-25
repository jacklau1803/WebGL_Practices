class Circle extends Geometry {
  constructor(shader, x, y) {
      super(shader);

      this.vertices = this.generateCircleVertices(x, y);
      this.faces = {0: [0, 1, 2]};
      this.rd = Math.random() / 100;
      this.translationMatrix_1 = new Matrix4();
      this.translationMatrix_1.setTranslate(this.rd,this.rd,0);

      this.translationMatrix_2 = new Matrix4();
      this.translationMatrix_2.setTranslate(-this.rd,this.rd,0);

      this.translationMatrix_3 = new Matrix4();
      this.translationMatrix_3.setTranslate(-this.rd,-this.rd,0);

      this.translationMatrix_4 = new Matrix4();
      this.translationMatrix_4.setTranslate(this.rd,-this.rd,0);

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateCircleVertices(x, y) {
      var vertices = []
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
         
         // Vertex1
         var vertex1 = new Vertex(rx, ry, 0.0);
         
         // Vertex 2
         var vertex2 = new Vertex(x, y, 0.0);
         
         if (window.rainbow){
         vertex0.color = [Math.random(),Math.random(), Math.random()];
         vertex2.color = [Math.random(),Math.random(), Math.random()];
         vertex1.color = [Math.random(),Math.random(), Math.random()];
         }
         vertices.push(vertex0);
         vertices.push(vertex1);
         vertices.push(vertex2);

         rx = lx;
         ry = ly;
      }
      return vertices;
   }
   render() {
            var rd = Math.floor(Math.random()*10);
            console.log(rd, rd % 4);
            if(rd % 4 == 0){
               this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_1);
            }
            else if (rd % 4 == 1){
               this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_3);
            }
            else if (rd % 4 == 2){
               this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_2);
            }
            else if (rd % 4 == 3){
               this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_4);
            }
       this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
   }
}