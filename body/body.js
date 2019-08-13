var BODY = {
    v: 1.0,
    bodies: [],
    body: function(name, position) {
        var self = this;
        var geometry = new THREE.SphereGeometry(50,50,50);
        var texture;
    
        var material = new THREE.MeshNormalMaterial();
        this.mesh = new THREE.Mesh( geometry, material );
        this.mesh.position.set(position.x, position.y, position.z);
        this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 20000);
        BODY.bodies.push(this);
        self.animate = function() {
            self.mesh.position.x = self.mesh.position.x * 1.001;
            self.camera.position = self.mesh.position;
        }
    }
}
BODY.addAllToScene = function(scene) {
    BODY.bodies.forEach(function(body) { scene.add(body.mesh); })
}
BODY.animateAll = function() {
    BODY.bodies.forEach(function(body) { body.animate(); })
}
