var TERRAIN = {
    v: 1.0
}
TERRAIN.builder = function(png, scene) {
    new terrain(png, scene);
    // new terrain('mt-taranaki.png', scene);
    // new terrain('mt-tarawera.png', scene);
}