/**
 * Specifies a Scene full of Geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Scene}
 */
class Scene {
  /**
   * Constructor for Scene.
   *
   * @constructor
   * @returns {Scene} Scene object created
   */
  constructor() {
    this.geometries = []; // Geometries being drawn on canvas
    this.light = null;
  }

  /**
   * Adds the given geometry to the the scene.
   *
   * @param {Geometry} geometry Geometry being added to scene
   */
  addGeometry(geometry) {
    this.geometries.push(geometry);
  }

  setLight(light) {
    this.light = light;
  }

  updateLight(){
      var model_matrix = new Matrix4();
      //model_matrix.setTranslate(0,0,0.01);
      model_matrix.setTranslate(16,0,16);
      model_matrix.rotate(0.01,1,0,0);
      model_matrix.translate(-16,0,-16);
      var curr_light = model_matrix.multiplyVector3(this.light.pos);
      this.light.pos = curr_light;
  }

  /**
   * Clears all the geometry within the scene.
   */
  clearGeometries() {
    console.log(this.geometries);
    this.geometries = [];
  }
}
