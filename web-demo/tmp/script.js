const frame = document.querySelector(".frame");
const boxes = document.getElementsByClassName("box");

const marginTop = 35;
const marginLeft = 20;
const hBox = 5;
const wBox = 4;
const W = 3*4+3;
const H = 5;
const hFrame = hBox*(H+2);
const wFrame = wBox*(W+2);
const listPosition = [];

function randomColor() {
    var hue = Math.floor(Math.random()*360).toString();
    return "hsl(" + hue + ", 100%, 50%)";
}

frame.style.width = wFrame.toString() + "%";
frame.style.height = hFrame.toString() + "vh";
frame.style.top = (marginTop-hBox).toString() + "vh";
frame.style.left = (marginLeft - wBox).toString() + "%";

for (let x=0; x<W; x++) {
    let mLeft = marginLeft + x * wBox;
    for (let y=0; y<H; y++) {
        box = boxes[x*H+y];
        box.style.width = wBox.toString() + "%";
        box.style.height = hBox.toString() + "vh";
        box.style.backgroundColor = randomColor();
        box.style.left = mLeft.toString() + "%";
        let mTop = marginTop + y*hBox;
    }
}