const canvas = document.getElementById("map-canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;
const scale = 0.05;

function drawMap() {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            // Gerando o valor de Perlin Noise para cada pixel
            const noiseValue = noise(x * scale, y * scale);
            
            // Mapeando o valor do ruído para uma cor (ex.: tons de cinza)
            const colorValue = Math.floor(noiseValue * 255);
            ctx.fillStyle = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
            
            // Desenhando o pixel na posição (x, y)
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

drawMap();
