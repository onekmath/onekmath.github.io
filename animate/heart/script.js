const heart = document.getElementById('heart');
const pointer = document.getElementById('pointer')

const rainbow = []
N = 100

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function init_rainbow() {
    const minR = 10;
    const maxR = 1000;
    const dR = (maxR-minR)/N;
    let R = maxR;
    for (let i =0; i< N; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle")
        circle.style.backgroundColor = "white";
        circle.style.width = R.toString() + "px";
        circle.style.height = R.toString() + "px";
        R -= dR;
        rainbow.push(circle);
        document.body.appendChild(circle);
    }
}

function make_color(hue) {
    for (let i=0; i<N; i++) {
        let circle = rainbow[i]
        color = "hsl("+hue+",100%, 50%)";
        circle.style.backgroundColor = color;
        hue += 5;
    }
}

async function animate() {
    hue = 0;
    rHeart = 1;
    pointer.innerHTML = "TT😍KA";
    pointer.style.color = "white"
    while (true) {
        make_color(hue);
        heart.style.scale = rHeart;
        await sleep(300);
        hue += 10;
        hue = hue % 360;
        rHeart += 1;
        rHeart = rHeart % 50;
    }
}

init_rainbow()
window.addEventListener("click", () => {
    animate()
})