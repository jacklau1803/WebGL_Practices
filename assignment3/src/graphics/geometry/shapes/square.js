class Square extends Geometry {
  constructor(shader, x, y) {
      super(shader);

      this.vertices = this.generateSquareVertices(x, y);
      this.faces = {0: [0, 1, 2]};

      this.rotationMatrix = new Matrix4();
      this.rotationMatrix.setRotate(5,0,0,1);

      this.translationMatrix = new Matrix4();
      this.translationMatrix.setTranslate(x, y, 0);

      this.translationMatrix_ = new Matrix4();
      this.translationMatrix_.setTranslate(-x, -y, 0);

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateSquareVertices(x, y) {
      var vertices = []
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

      if (window.rainbow){
        vertex0.color = [Math.random(),Math.random(), Math.random()];
        vertex2.color = [Math.random(),Math.random(), Math.random()];
        vertex1.color = [Math.random(),Math.random(), Math.random()];
        vertex3.color = [Math.random(),Math.random(), Math.random()];
        
      }
      vertices.push(vertex0);
      vertices.push(vertex1);
      vertices.push(vertex2);

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
   render() {
      this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);
      this.modelMatrix = this.modelMatrix.multiply(this.rotationMatrix);
      this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_);

       //this.modelMatrix = this.modelMatrix.multiply(this.rotationMatrix);
       //this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);
       //this.modelMatrix = this.modelMatrix.multiply(this.scalingMatrix);

      this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
   }
}