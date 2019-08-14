// Motors control how bodies move and rotate. 
// Every body has a camera, motors keep these in sync.
// Every motor must implement the 'motivate' function which takes a body
// and moves it according to the motors logic.
var MOTOR = {
    random: function() {
        // random movement
        this.motivate = function(body) {
            body.mesh.position.x = body.mesh.position.x + Math.random() - .5;
            body.mesh.position.y = body.mesh.position.y + Math.random() - .5;
            body.mesh.position.z = body.mesh.position.z + Math.random() - .5;
            body.mesh.rotation.y += (Math.random()-.5)/20.0;
            // body.mesh.rotation.y += Math.random()-.5/10.0;
            body.camera.position = body.mesh.position;
        }
    }
}