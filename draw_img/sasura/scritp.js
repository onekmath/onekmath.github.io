var ctx = document.getElementById('myCanvas').getContext("2d");


class Point {
    constructor(x,y,color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 1, 1)
    }
}


const p = new Point(10, 10, 'rgb(255,0,0)')
p.draw()


