class SkyCube extends Geometry {
  /**
   * Constructor for Cube.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Cube} Cube created
   */
  constructor(shader, x, y, z, size, image) {
      super(shader);

      this.x = x;
      this.y = y;
      this.image = image;

      this.vertices = this.generateCubeVertices(x, y, z, size);
      this.faces = {0: this.vertices};

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateCubeVertices(x, y, z, size) {
      var vertices = []
      var x_p = x + size;
      var x_m = x - size;
      var y_p = y + size;
      var y_m = y - size;
      var z_p = z + size;
      var z_m = z - size;

      // right
      var vertex0 = new Vertex(x_p, y_p, z_p);
      vertex0.texCoord = [1.0, 1.0];
      vertex0.normal.elements[0] = -1;
      vertex0.normal.elements[1] = 0;
      vertex0.normal.elements[2] = 0;
      vertices.push(vertex0);
      var vertex1 = new Vertex(x_p, y_m, z_p);
      vertex1.texCoord = [1.0, 0.0];
      vertex1.normal.elements[0] = -1;
      vertex1.normal.elements[1] = 0;
      vertex1.normal.elements[2] = 0;
      vertices.push(vertex1);
      var vertex2 = new Vertex(x_p, y_m, z_m);
      vertex2.texCoord = [0.0, 0.0];
      vertex2.normal.elements[0] = -1;
      vertex2.normal.elements[1] = 0;
      vertex2.normal.elements[2] = 0;
      vertices.push(vertex2);
      var vertex3 = new Vertex(x_p, y_p, z_p);
      vertex3.texCoord = [1.0, 1.0];
      vertex3.normal.elements[0] = -1;
      vertex3.normal.elements[1] = 0;
      vertex3.normal.elements[2] = 0;
      vertices.push(vertex3);
      var vertex4 = new Vertex(x_p, y_m, z_m);
      vertex4.texCoord = [0.0, 0.0];
      vertex4.normal.elements[0] = -1;
      vertex4.normal.elements[1] = 0;
      vertex4.normal.elements[2] = 0;
      vertices.push(vertex4);
      var vertex5 = new Vertex(x_p, y_p, z_m);
      vertex5.texCoord = [0.0, 1.0];
      vertex5.normal.elements[0] = -1;
      vertex5.normal.elements[1] = 0;
      vertex5.normal.elements[2] = 0;
      vertices.push(vertex5);

      // top
      var vertex6 = new Vertex(x_p, y_p, z_p);
      vertex6.texCoord = [1.0, 1.0];
      vertex6.normal.elements[0] = 0;
      vertex6.normal.elements[1] = -1;
      vertex6.normal.elements[2] = 0;
      vertices.push(vertex6);
      var vertex7 = new Vertex(x_p, y_p, z_m);
      vertex7.texCoord = [1.0, 0.0];
      vertex7.normal.elements[0] = 0;
      vertex7.normal.elements[1] = -1;
      vertex7.normal.elements[2] = 0;
      vertices.push(vertex7);
      var vertex8 = new Vertex(x_m, y_p, z_m);
      vertex8.texCoord = [0.0, 0.0];
      vertex8.normal.elements[0] = 0;
      vertex8.normal.elements[1] = -1;
      vertex8.normal.elements[2] = 0;
      vertices.push(vertex8);
      var vertex9 = new Vertex(x_p, y_p, z_p);
      vertex9.texCoord = [1.0, 1.0];
      vertex9.normal.elements[0] = 0;
      vertex9.normal.elements[1] = -1;
      vertex9.normal.elements[2] = 0;
      vertices.push(vertex9);
      var vertex10 = new Vertex(x_m, y_p, z_m);
      vertex10.texCoord = [0.0, 0.0];
      vertex10.normal.elements[0] = 0;
      vertex10.normal.elements[1] = -1;
      vertex10.normal.elements[2] = 0;
      vertices.push(vertex10);
      var vertex11 = new Vertex(x_m, y_p, z_p);
      vertex11.texCoord = [0.0, 1.0];
      vertex11.normal.elements[0] = 0;
      vertex11.normal.elements[1] = -1;
      vertex11.normal.elements[2] = 0;
      vertices.push(vertex11);

      // back
      var vertex12 = new Vertex(x_p, y_p, z_p);
      vertex12.texCoord = [0.0, 1.0];
      vertex12.normal.elements[0] = 0;
      vertex12.normal.elements[1] = 0;
      vertex12.normal.elements[2] = -1;
      vertices.push(vertex12);
      var vertex13 = new Vertex(x_m, y_p, z_p);
      vertex13.texCoord = [1.0, 1.0];
      vertex13.normal.elements[0] = 0;
      vertex13.normal.elements[1] = 0;
      vertex13.normal.elements[2] = -1;
      vertices.push(vertex13);
      var vertex14 = new Vertex(x_m, y_m, z_p);
      vertex14.texCoord = [1.0, 0.0];
      vertex14.normal.elements[0] = 0;
      vertex14.normal.elements[1] = 0;
      vertex14.normal.elements[2] = -1;
      vertices.push(vertex14);
      var vertex15 = new Vertex(x_p, y_p, z_p);
      vertex15.texCoord = [0.0, 1.0];
      vertex15.normal.elements[0] = 0;
      vertex15.normal.elements[1] = 0;
      vertex15.normal.elements[2] = -1;
      vertices.push(vertex15);
      var vertex16 = new Vertex(x_m, y_m, z_p);
      vertex16.texCoord = [1.0, 0.0];
      vertex16.normal.elements[0] = 0;
      vertex16.normal.elements[1] = 0;
      vertex16.normal.elements[2] = -1;
      vertices.push(vertex16);
      var vertex17 = new Vertex(x_p, y_m, z_p);
      vertex17.texCoord = [0.0, 0.0];
      vertex17.normal.elements[0] = 0;
      vertex17.normal.elements[1] = 0;
      vertex17.normal.elements[2] = -1;
      vertices.push(vertex17);

      // bottom
      var vertex18 = new Vertex(x_p, y_m, z_p);
      vertex18.texCoord = [0.0, 1.0];
      vertex18.normal.elements[0] = 0;
      vertex18.normal.elements[1] = 1;
      vertex18.normal.elements[2] = 0;
      vertices.push(vertex18);
      var vertex19 = new Vertex(x_m, y_m, z_p);
      vertex19.texCoord = [1.0, 1.0];
      vertex19.normal.elements[0] = 0;
      vertex19.normal.elements[1] = 1;
      vertex19.normal.elements[2] = 0;
      vertices.push(vertex19);
      var vertex20 = new Vertex(x_m, y_m, z_m);
      vertex20.texCoord = [1.0, 0.0];
      vertex20.normal.elements[0] = 0;
      vertex20.normal.elements[1] = 1;
      vertex20.normal.elements[2] = 0;
      vertices.push(vertex20);
      var vertex21 = new Vertex(x_p, y_m, z_p);
      vertex21.texCoord = [0.0, 1.0];
      vertex21.normal.elements[0] = 0;
      vertex21.normal.elements[1] = 1;
      vertex21.normal.elements[2] = 0;
      vertices.push(vertex21);
      var vertex22 = new Vertex(x_m, y_m, z_m);
      vertex22.texCoord = [1.0, 0.0];
      vertex22.normal.elements[0] = 0;
      vertex22.normal.elements[1] = 1;
      vertex22.normal.elements[2] = 0;
      vertices.push(vertex22);
      var vertex23 = new Vertex(x_p, y_m, z_m);
      vertex23.texCoord = [0.0, 0.0];
      vertex23.normal.elements[0] = 0;
      vertex23.normal.elements[1] = 1;
      vertex23.normal.elements[2] = 0;
      vertices.push(vertex23);

      // front
      var vertex24 = new Vertex(x_m, y_m, z_m);
      vertex24.texCoord = [0.0, 0.0];
      vertex24.normal.elements[0] = 0;
      vertex24.normal.elements[1] = 0;
      vertex24.normal.elements[2] = 1;
      vertices.push(vertex24);
      var vertex25 = new Vertex(x_m, y_p, z_m);
      vertex25.texCoord = [0.0, 1.0];
      vertex25.normal.elements[0] = 0;
      vertex25.normal.elements[1] = 0;
      vertex25.normal.elements[2] = 1;
      vertices.push(vertex25);
      var vertex26 = new Vertex(x_p, y_p, z_m);
      vertex26.texCoord = [1.0, 1.0];
      vertex26.normal.elements[0] = 0;
      vertex26.normal.elements[1] = 0;
      vertex26.normal.elements[2] = 1;
      vertices.push(vertex26);
      var vertex27 = new Vertex(x_m, y_m, z_m);
      vertex27.texCoord = [0.0, 0.0];
      vertex27.normal.elements[0] = 0;
      vertex27.normal.elements[1] = 0;
      vertex27.normal.elements[2] = 1;
      vertices.push(vertex27);
      var vertex28 = new Vertex(x_p, y_p, z_m);
      vertex28.texCoord = [1.0, 1.0];
      vertex28.normal.elements[0] = 0;
      vertex28.normal.elements[1] = 0;
      vertex28.normal.elements[2] = 1;
      vertices.push(vertex28);
      var vertex29 = new Vertex(x_p, y_m, z_m);
      vertex29.texCoord = [1.0, 0.0];
      vertex29.normal.elements[0] = 0;
      vertex29.normal.elements[1] = 0;
      vertex29.normal.elements[2] = 1;
      vertices.push(vertex29);

      // left
      var vertex30 = new Vertex(x_m, y_p, z_m);
      vertex30.texCoord = [1.0, 1.0];
      vertex30.normal.elements[0] = 1;
      vertex30.normal.elements[1] = 0;
      vertex30.normal.elements[2] = 0;
      vertices.push(vertex30);
      var vertex31 = new Vertex(x_m, y_m, z_m);
      vertex31.texCoord = [1.0, 0.0];
      vertex31.normal.elements[0] = 1;
      vertex31.normal.elements[1] = 0;
      vertex31.normal.elements[2] = 0;
      vertices.push(vertex31);
      var vertex32 = new Vertex(x_m, y_m, z_p);
      vertex32.texCoord = [0.0, 0.0];
      vertex32.normal.elements[0] = 1;
      vertex32.normal.elements[1] = 0;
      vertex32.normal.elements[2] = 0;
      vertices.push(vertex32);
      var vertex33 = new Vertex(x_m, y_p, z_m);
      vertex33.texCoord = [1.0, 1.0];
      vertex33.normal.elements[0] = 1;
      vertex33.normal.elements[1] = 0;
      vertex33.normal.elements[2] = 0;
      vertices.push(vertex33);
      var vertex34 = new Vertex(x_m, y_m, z_p);
      vertex34.texCoord = [0.0, 0.0];
      vertex34.normal.elements[0] = 1;
      vertex34.normal.elements[1] = 0;
      vertex34.normal.elements[2] = 0;
      vertices.push(vertex34);
      var vertex35 = new Vertex(x_m, y_p, z_p);
      vertex35.texCoord = [0.0, 1.0];
      vertex35.normal.elements[0] = 1;
      vertex35.normal.elements[1] = 0;
      vertex35.normal.elements[2] = 0;
      vertices.push(vertex35);

      return vertices;
  }

  add_model(model_matrix){
       this.modelMatrix = model_matrix;
  }

  updateAnimation() {
    this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
  }

}
