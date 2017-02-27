window.onload = function() {
  Particles.init({
    selector: '#myCanvas',
    maxParticles: 100,
    sizeVariations: 4,
    speed: 0.35,
    color: '#0f7699',
    minDistance: 120,
    connectParticles: true
  });
};