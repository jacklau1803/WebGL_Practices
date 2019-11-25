/**
 * Specifies a Camera that can Dolly/Truck and Tilt/Pan.
 *
 * @author Lucas N. Ferreira
 * @this {Renderer}
 */
class Camera {
   /**
    * Constructor for Camera.
    *
    * @constructor
    * @returns {Camera} Camera object created
    */
    constructor(shader) {
        this.speed = 0.1;

        // Camera view attributes
        this.eye     = new Vector3([18, 2, 24]);
        this.center  = new Vector3([18, 2,-1]);
        this.up      = new Vector3([0, 1, 0]);
        
        this.orth = [-10, 50,-10,50, -10, 50];
        this.per = [60, 1, 0.1, 100];

        this.viewMatrix = new Matrix4();
        this.updateView();

        this.projectionMatrix = new Matrix4();
        this.projectionMatrix.setPerspective(60, 1, 0.1, 100);
    }

    truck(dir) {
        // Calculate the n camera axis
        var n = this.eye.sub(this.center);
        n = n.normalize()

        // Calculate the u camera axis
        var u = this.up.cross(n);
        u = u.normalize();

        // Scale the u axis to the desired distance to move
        u = u.mul(dir * this.speed);

        // Add the direction vector to both the eye and center positions
        this.eye = this.eye.add(u);
        this.center = this.center.add(u);

        this.updateView();
    }

    dolly(dir){
        // Calculate the n camera axis
        var n = this.eye.sub(this.center);
        n = n.normalize();
        
         // Scale the u axis to the desired distance to move
        n = n.mul(dir * this.speed);

        // Add the direction vector to both the eye and center positions
        this.eye = this.eye.add(n);
        this.center = this.center.add(n);

        this.updateView();
    }
    pan(dir) {
        // Calculate the n camera axis
        var n = this.eye.sub(this.center);
        n = n.normalize();
        
        var u = this.up.cross(n);
        u = u.normalize();
        
        var new_center = this.center.sub(this.eye);
        
        var p = n.cross(this.up.cross(n));
        p = p.normalize();
        
        
        var rotate_matrix = new Matrix4();
        
        var angle = dir;
        rotate_matrix.setRotate(angle, p.elements[0], p.elements[1], p.elements[2]);
        var result = rotate_matrix.multiplyVector3(new_center);
        //console.log(result);
        //result = res.add(this.eye);
        this.center = this.eye.add(result);
        
        if (Math.abs(n.dot(this.up)) >= 0.985) {
            this.up = rotate_matrix.multiplyVector3(this.up);
        }
        this.updateView();
    
    }

    tilt(dir){
          // Calculate the n camera axis
        var n = this.eye.sub(this.center);
        n = n.normalize();
        
        var u = this.up.cross(n);
        u = u.normalize();
        
        var new_center = this.center.sub(this.eye);
        
        var rotate_matrix = new Matrix4();
        
        var angle = dir;
        rotate_matrix.setRotate(angle, u.elements[0], u.elements[1], u.elements[2]);
        var result = rotate_matrix.multiplyVector3(new_center);
        
        //result = res.add(this.eye);
        this.center = this.eye.add(result);
        
         if (Math.abs(n.dot(this.up)) >= 0.985) {
            this.up = rotate_matrix.multiplyVector3(this.up);
        }
        this.updateView();
    }
    zoom(dir){
        if(projection_mode == 0){
            var p = this.per;
            
            if(p[0]>2&&p[0]<178){
                p[0] = p[0] - dir;
                
            }
            console.log(p);
            this.projectionMatrix.setPerspective(p[0], p[1], p[2], p[3]);
        }
        else{
            var o = this.orth;
            if(o[4] + dir < o[5]){
                o[4] = o[4] + dir;
            }
            this.projectionMatrix.setOrtho(o[0],o[1],o[2], o[3],o[4],o[5]);
        }
    }
    updateView() {
        this.viewMatrix.setLookAt(this.eye.elements[0], this.eye.elements[1], this.eye.elements[2],
                                  this.center.elements[0], this.center.elements[1], this.center.elements[2],
                                  this.up.elements[0], this.up.elements[1], this.up.elements[2]);
    }
}
