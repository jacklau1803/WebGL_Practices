class Cube extends Geometry {
  constructor(shader, x, y) {
      super(shader);

      this.vertices = this.generateCubeVertices(x, y);
      this.faces = {0: [0, 1, 2]};

      this.rotationMatrix = new Matrix4();
      this.rotationMatrix.setRotate(1,1,1,1);

      this.translationMatrix = new Matrix4();
      this.translationMatrix.setTranslate(x, y, 0);

      this.translationMatrix_ = new Matrix4();
      this.translationMatrix_.setTranslate(-x, -y, 0);

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateCubeVertices(x, y) {
      var vertices = []
      console.log(x, y, "cube");
      var size = document.getElementById("size").value;

      // Vertex 0
      var vertex0 = new Vertex(x+0.25*size, y+0.25*size, 0.25*size);

      // Vertex1
      var vertex1 = new Vertex(x-0.25*size, y+0.25*size, 0.25*size);
      
      // Vertex 2
      var vertex2 = new Vertex(x-0.25*size, y-0.25*size, 0.25*size);

      // Vertex 3
      var vertex3 = new Vertex(x+0.25*size, y-0.25*size, 0.25*size);

      // Vertex 4
      var vertex4 = new Vertex(x+0.25*size, y-0.25*size, -0.25*size);

      // Vertex5
      var vertex5 = new Vertex(x+0.25*size, y+0.25*size, -0.25*size);
      
      // Vertex 6
      var vertex6 = new Vertex(x-0.25*size, y+0.25*size, -0.25*size);

      // Vertex 7
      var vertex7 = new Vertex(x-0.25*size, y-0.25*size, -0.25*size);

      // Push vertices
      vertices.push(vertex0);
      vertices.push(vertex1);
      vertices.push(vertex2); 

      vertices.push(vertex0);
      vertices.push(vertex2);
      vertices.push(vertex3);
      
      vertices.push(vertex0);
      vertices.push(vertex3);
      vertices.push(vertex4); 

      vertices.push(vertex0);
      vertices.push(vertex4);
      vertices.push(vertex5);
      
      vertices.push(vertex0);
      vertices.push(vertex1);
      vertices.push(vertex6); 

      vertices.push(vertex0);
      vertices.push(vertex6);
      vertices.push(vertex5);
      
      vertices.push(vertex1);
      vertices.push(vertex6);
      vertices.push(vertex7); 

      vertices.push(vertex2);
      vertices.push(vertex6);
      vertices.push(vertex7);
      
      vertices.push(vertex2);
      vertices.push(vertex7);
      vertices.push(vertex3);

      vertices.push(vertex3);
      vertices.push(vertex7);
      vertices.push(vertex4);
      
      vertices.push(vertex4);
      vertices.push(vertex7);
      vertices.push(vertex6); 

      vertices.push(vertex4);
      vertices.push(vertex6);
      vertices.push(vertex5);

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