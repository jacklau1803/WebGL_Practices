class Default extends Geometry {
  constructor(shader, x, y, image) {
      super(shader);

      this.vertices = this.generateDefaultVertices(x, y);
      this.faces = {0: [0, 1, 2]};

      this.rotationMatrix = new Matrix4();
      this.rotationMatrix.setRotate(1,1,1,1);

      this.translationMatrix = new Matrix4();
      this.translationMatrix.setTranslate(x, y, 0);

      this.translationMatrix_ = new Matrix4();
      this.translationMatrix_.setTranslate(-x, -y, 0);
      this.image = image;

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateDefaultVertices(x, y) {
      var vertices = []
      console.log(x, y, "cube");
      var size = document.getElementById("size").value;

      var vertex0 = new Vertex( x+0.25*size, y+0.25*size, 0.25*size);
      var vertex0_1 = new Vertex( x+0.25*size, y+0.25*size, 0.25*size);
      var vertex0_2 = new Vertex( x+0.25*size, y+0.25*size, 0.25*size);
      var vertex0_3 = new Vertex( x+0.25*size, y+0.25*size, 0.25*size);
      var vertex0_4 = new Vertex( x+0.25*size, y+0.25*size, 0.25*size);
      var vertex0_5 = new Vertex( x+0.25*size, y+0.25*size, 0.25*size);
      
      var vertex1 = new Vertex( x-0.25*size, y+0.25*size, 0.25*size);
      var vertex1_1 = new Vertex( x-0.25*size, y+0.25*size, 0.25*size);
      var vertex1_2 = new Vertex( x-0.25*size, y+0.25*size, 0.25*size);
      var vertex1_3 = new Vertex( x-0.25*size, y+0.25*size, 0.25*size);
      
      var vertex2 = new Vertex( x-0.25*size, y-0.25*size, 0.25*size);
      var vertex2_1 = new Vertex( x-0.25*size, y-0.25*size, 0.25*size);
      var vertex2_2 = new Vertex( x-0.25*size, y-0.25*size, 0.25*size);
      var vertex2_3 = new Vertex( x-0.25*size, y-0.25*size, 0.25*size);
      
      var vertex3 = new Vertex( x+0.25*size, y-0.25*size, 0.25*size);
      var vertex3_1 = new Vertex( x+0.25*size, y-0.25*size, 0.25*size);
      var vertex3_2 = new Vertex( x+0.25*size, y-0.25*size, 0.25*size);
      var vertex3_3 = new Vertex( x+0.25*size, y-0.25*size, 0.25*size);
      
      var vertex4 = new Vertex( x+0.25*size, y-0.25*size, -0.25*size);
      var vertex4_1 = new Vertex( x+0.25*size, y-0.25*size, -0.25*size);
      var vertex4_2 = new Vertex( x+0.25*size, y-0.25*size, -0.25*size);
      var vertex4_3 = new Vertex( x+0.25*size, y-0.25*size, -0.25*size);
      var vertex4_4 = new Vertex( x+0.25*size, y-0.25*size, -0.25*size);
      
      var vertex5 = new Vertex( x+0.25*size, y+0.25*size, -0.25*size);
      var vertex5_1 = new Vertex( x+0.25*size, y+0.25*size, -0.25*size);
      var vertex5_2 = new Vertex( x+0.25*size, y+0.25*size, -0.25*size);
      
      var vertex6 = new Vertex( x-0.25*size, y+0.25*size, -0.25*size);
      var vertex6_1 = new Vertex( x-0.25*size, y+0.25*size, -0.25*size);
      var vertex6_2 = new Vertex( x-0.25*size, y+0.25*size, -0.25*size);
      var vertex6_3 = new Vertex( x-0.25*size, y+0.25*size, -0.25*size);
      var vertex6_4 = new Vertex( x-0.25*size, y+0.25*size, -0.25*size);
      
      var vertex7 = new Vertex( x-0.25*size, y-0.25*size, -0.25*size);
      var vertex7_1 = new Vertex( x-0.25*size, y-0.25*size, -0.25*size);
      var vertex7_2 = new Vertex( x-0.25*size, y-0.25*size, -0.25*size);
      var vertex7_3 = new Vertex( x-0.25*size, y-0.25*size, -0.25*size);
      var vertex7_4 = new Vertex( x-0.25*size, y-0.25*size, -0.25*size);

      //tex
      vertex0.texCoord = [0.0, 3.0];  
      vertices.push(vertex0);
      vertex1.texCoord = [3.0, 3.0];
      vertices.push(vertex1);
      vertex2.texCoord = [3.0, 0.0];
      vertices.push(vertex2); 
      vertex0_1.texCoord = [0.0, 3.0];
      vertices.push(vertex0_1);
      vertex2_1.texCoord = [3.0, 0.0];
      vertices.push(vertex2_1);
      vertex3.texCoord = [0.0, 0.0];
      vertices.push(vertex3);
      vertex0_2.texCoord = [1.0, 1.0];  
      vertices.push(vertex0_2);
      vertex3_1.texCoord = [1.0, 0.5];
      vertices.push(vertex3_1);
      vertex4.texCoord = [0.0, 0.5];
      vertices.push(vertex4);
      vertex0_3.texCoord = [1.0, 1.0];
      vertices.push(vertex0_3);
      vertex4_1.texCoord = [0.0, 0.5];
      vertices.push(vertex4_1);
      vertex5.texCoord = [0.0, 1.0];
      vertices.push(vertex5);
      vertex0_4.texCoord = [2.0, 1.0];  
      vertices.push(vertex0_4);
      vertex1_1.texCoord = [0.0, 1.0];
      vertices.push(vertex1_1);
      vertex6.texCoord = [0.0, 0.0];
      vertices.push(vertex6);
      vertex0_5.texCoord = [2.0, 1.0];
      vertices.push(vertex0_5);
      vertex6_1.texCoord = [0.0, 0.0];
      vertices.push(vertex6_1);
      vertex5_1.texCoord = [2.0, 0.0];
      vertices.push(vertex5_1);
      vertex1_2.texCoord = [0.0, 0.5];  
      vertices.push(vertex1_2);
      vertex6_2.texCoord = [1.0, 0.5];
      vertices.push(vertex6_2);
      vertex7.texCoord = [1.0, 0.0];
      vertices.push(vertex7);
      vertex2_2.texCoord = [0.0, 0.0];
      vertices.push(vertex2_2);
      vertex1_3.texCoord = [0.0, 0.5];
      vertices.push(vertex1_3);
      vertex7_1.texCoord = [1.0, 0.0];
      vertices.push(vertex7_1);
      vertex2_3.texCoord = [0.0, 0.0];  
      vertices.push(vertex2_3);
      vertex7_2.texCoord = [0.0, 1.0];
      vertices.push(vertex7_2);
      vertex3_2.texCoord = [2.0, 0.0];
      vertices.push(vertex3_2);
      vertex3_3.texCoord = [2.0, 0.0];
      vertices.push(vertex3_3);
      vertex7_3.texCoord = [0.0, 1.0];
      vertices.push(vertex7_3);
      vertex4_2.texCoord = [2.0, 1.0];
      vertices.push(vertex4_2);
      vertex4_3.texCoord = [1.0, 0.0];  
      vertices.push(vertex4_3);
      vertex7_4.texCoord = [0.0, 0.0];
      vertices.push(vertex7_4);
      vertex6_3.texCoord = [0.0, 1.0];
      vertices.push(vertex6_3);
      vertex4_4.texCoord = [1.0, 0.0];
      vertices.push(vertex4_4);
      vertex6_4.texCoord = [0.0, 1.0];
      vertices.push(vertex6_4);
      vertex5_2.texCoord = [1.0, 1.0];
      vertices.push(vertex5_2);
      

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