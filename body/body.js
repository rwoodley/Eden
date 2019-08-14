var BODY = {
    v: 1.0,
    bodies: [],
    body: function(name, position, motor) {
        var self = this;
        var geometry = new THREE.SphereGeometry(50,50,50);
        var texture;
    
        texture = THREE.ImageUtils.loadTexture('textures/bb8head.png');
        var material = new THREE.MeshBasicMaterial({map: texture});
        this.mesh = new THREE.Mesh( geometry, material );
        this.mesh.position.set(position.x, position.y, position.z);
        this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 20000);
        this.motor = motor;
        BODY.bodies.push(this);
        self.animate = function() {
            self.motor.motivate(self);
        }
    }
}
BODY.addAllToScene = function(scene) {
    BODY.bodies.forEach(function(body) { scene.add(body.mesh); })
}
BODY.animateAll = function() {
    BODY.bodies.forEach(function(body) { body.animate(); })
}
