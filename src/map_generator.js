import { noise } from '../libs/perlin.js';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("map-canvas");
  const ctx    = canvas.getContext("2d");

  // dimensiona o canvas para preencher a tela, se quiser:
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const width  = canvas.width;
  const height = canvas.height;
  const scale  = 0.05;

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      // Se noise() for do p5, ainda vai dar erro aqui
      const noiseValue = noise.noise.perlin2(x * scale, y * scale);
      const c = Math.floor(noiseValue * 255);
      ctx.fillStyle = `rgb(${c},${c},${c})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
});
