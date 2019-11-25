/**
 * Specifies a vertex. Currently only contains the vertex's position.
 *
 * @author Lucas N. Ferreira
 * @this {Vertex}
 */
class Vertex {
  constructor(x, y, z) {
      this.point  = new Vector3([x, y, z]);
      this.color  = [document.getElementById("red").value, document.getElementById("green").value, document.getElementById("blue").value, 1.0];
      console.log(document.getElementById("red").value, document.getElementById("green").value, document.getElementById("blue").value);
      // This class can be extended to support other attributes such as
      // normals and UV coordinates.
  }
}
