const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const shapes = [];
const gridSize = 50; // Size of each grid cell
const shapeColors = {
    square: 'yellow',
    triangle: 'red',
    hexagon: 'purple',
};

class Shape {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.size = 30; // Size of the shape
        this.vx = (Math.random() - 0.5) * 2; // Random velocity
        this.vy = (Math.random() - 0.5) * 2; // Random velocity
        this.type = type;
        this.friction = 0.98; // Friction to simulate "soap" physics
    }

    update() {
        // Update position based on velocity
        this.x += this.vx;
        this.y += this.vy;

        // Apply friction
        this.vx *= this.friction;
        this.vy *= this.friction;

        // Stop movement if below threshold
        if (Math.abs(this.vx) < 0.01) this.vx = 0;
        if (Math.abs(this.vy) < 0.01) this.vy = 0;
    }

    draw() {
        ctx.fillStyle = shapeColors[this.type];
        ctx.beginPath();
        switch (this.type) {
            case 'square':
                ctx.rect(this.x, this.y, this.size, this.size);
                break;
            case 'triangle':
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.size, this.y);
                ctx.lineTo(this.x + this.size / 2, this.y - this.size);
                ctx.closePath();
                break;
            case 'hexagon':
                ctx.moveTo(this.x + this.size * Math.cos(0), this.y + this.size * Math.sin(0));
                for (let i = 1; i <= 6; i++) {
                    ctx.lineTo(this.x + this.size * Math.cos(i * 2 * Math.PI / 6), this.y + this.size * Math.sin(i * 2 * Math.PI / 6));
                }
                break;
        }
        ctx.fill();
    }
}

function spawnShape() {
    const types = Object.keys(shapeColors);
    const type = types[Math.floor(Math.random() * types.length)];
    const x = Math.floor(Math.random() * canvas.width / gridSize) * gridSize;
    const y = Math.floor(Math.random() * canvas.height / gridSize) * gridSize;
    shapes.push(new Shape(x, y, type));
}

function drawGrid() {
    ctx.strokeStyle = '#ccc'; // Grid line color
    ctx.lineWidth = 1; // Width of grid lines

    // Vertical lines
    for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    
    // Horizontal lines
    for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();

    shapes.forEach(shape => {
        shape.update();
        shape.draw();
    });

    requestAnimationFrame(update);
}

setInterval(spawnShape, 1000); // Spawn a new shape every second
update();
