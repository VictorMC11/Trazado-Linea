function setup(){
    createCanvas(500, 500);
}

function draw(){
    stroke("red");
    ecuPP(width / 2, 0, width / 2, height);
    ecuPP(0, height /2, width, height / 2);
    ecuPP(0, 0, width, height);
    ecuPP(0, height, width, 0);

    stroke("blue");
    DDA(width / 2, 0, width / 2, height);
    DDA(0, height /2, width, height / 2);
    DDA(0, 0, width, height);
    DDA(0, height, width, 0);

    stroke("green");
    Bresenham(width / 2, 0, width / 2, height);
    Bresenham(0, height /2, width, height / 2);
    Bresenham(0, 0, width, height);
    Bresenham(0, height, width, 0);
}

function ecuPP(x1, y1, x2, y2) {
    let x = x1;
    let y = y1;
    let stepX = 1;
    let stepY = 1;
    const dx = x2 - x1;
    const dy = y2 - y1;
    if (dx == 0) {
        if (dy < 0) stepY = -1;
        while (y !== y2) {
	        point(x, y);
	        y += stepY;
        }
    } else {
        const m = dy / dx;
        const b = y1 - m * x1;
        if (dx < 0) stepX = -1;
        while (x !== x2) {
	        point(x, y);
	        x += stepX;
	        y = m * x + b;
        }
    }
}


function DDA(x1, y1, x2, y2){
    let x = x1;
	let y = y1;
	let dx = x2 - x1;
	let dy = y2 - y1;
    const m = Math.abs(dx) > Math.abs(dy) ? Math.abs(dx) : Math.abs(dy);
    const xIncrement = dx / m;
    const yIncrement = dy / m;
    for (let i = 0; i < m; i++) {
		x += xIncrement;
		y += yIncrement;
		point(x, y);
    }
}


function Bresenham(x1, y1, x2, y2){
    let x = x1;
	let y = y1;
	let dx = x2 - x1;
	let dy = y2 - y1;
	let sx = 1;
	let sy = 1;
	if (dy < 0) {
		dy = -dy;
		sy = -1;
	}
	if (dx < 0) {
		dx = -dx;
		sx = -1;
	}
	if (dx > dy) {
		let p = 2 * dy - dx;

		while (x != x2) {
			point(x, y);
			x += sx;

			if (p < 0) {
				p += 2 * dy;
			} else {
				y += sy;
				p += 2 * (dy - dx);
			}
		}
	} else {
		let p = 2 * dx - dy;

		while (y != y2) {
			point(x, y);
			y += sy;

			if (p < 0) {
				p += 2 * dx;
			} else {
				x += sx;
				p += 2 * (dx - dy);
			}
		}
	}
  }