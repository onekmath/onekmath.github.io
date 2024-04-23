

const points = [];
const N = 400;
const size_point = 10;
const N8=171;

function init_points(N) {
    for (let i=0;i<N;i++) {
        const p = document.createElement("div");
        p.classList.add("dot");
        document.body.appendChild(p);
        points.push(p);
    }
}

function square_full(x_offset, y_offset) {
    const k = Math.floor(Math.sqrt(N))
    for (let i=0;i<k;i++) {
        for (let j=0;j<k;j++) {
            const l = x_offset + j*size_point
            const t = y_offset + i*size_point
            console.log(i*k+j)
            points[i*k+j].style.top = t+"px";
            points[i*k+j].style.left = l+"px";
        }
    }
}

function square(x_offset, y_offset, begin_dot, size) {
    const k = Math.floor(Math.sqrt(size))
    for (let i=0;i<k;i++) {
        for (let j=0;j<k;j++) {
            const l = x_offset + j*size_point
            const t = y_offset + i*size_point
            points[begin_dot+i*k+j].style.top = t+"px";
            points[begin_dot+i*k+j].style.left = l+"px";
        }
    }
}

function reset_pos(begin_dot) {
    for(let i=begin_dot; i<N; i++){
        points[i].style.top = 0;
        points[i].style.left = 0;
    }
}

function number0(x_offset, y_offset) {
    count = 0
    for (let i=0;i<5;i++) {
        square(x_offset+3*i*size_point, y_offset,i*9,9)
        count+=1
    }
    for(let i=0;i<4;i++){
        square(x_offset+12*size_point, y_offset+3*(i+1)*size_point,count*9,9)
        count+=1
    }
    for(let i=0;i<4;i++){
        square(x_offset+3*(i)*size_point,y_offset+12*size_point,count*9,9)
        count+=1
    }
    for(let i=0;i<3;i++){
        square(x_offset,y_offset+(i+1)*3*size_point,count*9,9)
        count+=1
    }
    reset_pos(count*9)
}

function number1(x_offset, y_offset) {
    count = 0
    for (let i=0;i<5;i++) {
        square(x_offset+3*size_point, y_offset+3*i*size_point,0,9)
        count+=1
    }
    reset_pos(count*9)
}

function number8(x_offset, y_offset) {
    count = 0
    for (let i=0;i<5;i++) {
        square(x_offset+3*i*size_point, y_offset,i*9,9)
        count+=1
    }
    for(let i=0;i<4;i++){
        square(x_offset+12*size_point, y_offset+3*(i+1)*size_point,count*9,9)
        count+=1
    }
    for(let i=0;i<4;i++){
        square(x_offset+3*(i)*size_point,y_offset+12*size_point,count*9,9)
        count+=1
    }
    for(let i=0;i<3;i++){
        square(x_offset,y_offset+(i+1)*3*size_point,count*9,9)
        count+=1
    }
    for(let i=0;i<3;i++){
        square(x_offset+(i+1)*3*size_point, y_offset+6*size_point,count*9,9)
        count+=1
    }
    reset_pos(count*9)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

xo = 100;
yo = 100;

async function animate(){
    number0(xo,yo)
    await sleep(1000)
    number1(xo,yo)
    await sleep(1000)
}

init_points(N)
