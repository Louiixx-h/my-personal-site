const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 96;
canvas.height = 96;

let angleY = 0;

function drawTriangle(ctx, points, color) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    ctx.lineTo(points[1].x, points[1].y);
    ctx.lineTo(points[2].x, points[2].y);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

function rotateY(point, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: point.x * cos - point.z * sin,
        y: point.y,
        z: point.x * sin + point.z * cos
    };
}

function project(point3d, width, height, scale) {
    return {
        x: point3d.x * scale + width / 2,
        y: point3d.y * scale + height / 2
    };
}

function drawTriforce(angle) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const size = 16;
    const height = size * Math.sqrt(3);
    const triangles = [
        // Bottom-left triangle
        [
            { x: -size, y: -height / 2, z: 0 },
            { x: 0, y: height / 2, z: 0 },
            { x: -2 * size, y: height / 2, z: 0 }
        ],
        // Bottom-right triangle
        [
            { x: size, y: -height / 2, z: 0 },
            { x: 2 * size, y: height / 2, z: 0 },
            { x: 0, y: height / 2, z: 0 }
        ],
        // Top triangle
        [
            { x: 0, y: -1.5 * height, z: 0 },
            { x: size, y: -height / 2, z: 0 },
            { x: -size, y: -height / 2, z: 0 }
        ]
    ];

    triangles.forEach(triangle => {
        const rotatedPoints = triangle.map(p => rotateY(p, angle));
        const projectedPoints = rotatedPoints.map(p => project(p, canvas.width, canvas.height, 1));
        drawTriangle(ctx, projectedPoints, '#F0EB8D');
    });
}

function animate() {
    angleY += 0.02;
    drawTriforce(angleY);
    requestAnimationFrame(animate);
}

animate();