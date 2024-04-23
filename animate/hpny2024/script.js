const boxes = document.getElementsByClassName("box");
const frame = document.querySelector(".frame");

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

//  paint all frame
for (let x=0; x<W; x++) {
    let mLeft = marginLeft + x * wBox;
    for (let y=0; y<H; y++) {
        box = boxes[x*H+y];
        box.style.width = wBox.toString() + "%";
        box.style.height = hBox.toString() + "vh";
        box.style.backgroundColor = randomColor();
        box.style.left = mLeft.toString() + "%";
        let mTop = marginTop + y*hBox;
        box.style.top = mTop.toString() + "vh";
        const pos = {left: mLeft, top: mTop};
        listPosition.push(pos);
    }
}

//  paint black space
for (let x=3; x<W; x=x+4) {
    for (let y=0; y<H; y++) {
        box = boxes[x*H+y];
        box.style.backgroundColor = "black";
    }
}
boxes[1].style.backgroundColor = "black";
boxes[6].style.backgroundColor = "black";
boxes[8].style.backgroundColor = "black";
boxes[13].style.backgroundColor = "black";
boxes[26].style.backgroundColor = "black";
boxes[27].style.backgroundColor = "black";
boxes[28].style.backgroundColor = "black";
boxes[41].style.backgroundColor = "black";
boxes[46].style.backgroundColor = "black";
boxes[48].style.backgroundColor = "black";
boxes[53].style.backgroundColor = "black";
boxes[65].style.backgroundColor = "black";
boxes[66].style.backgroundColor = "black";
boxes[63].style.backgroundColor = "black";
boxes[64].style.backgroundColor = "black";
boxes[68].style.backgroundColor = "black";
boxes[69].style.backgroundColor = "black";


//  eventc
frame.addEventListener("mouseover", (event) => {
    frame.style.boxShadow = "0 0 10px yellow";

    for (let x=0; x<W; x++) {
        for (let y=0; y<H; y++) {
            box = boxes[x*H+y];
            box.style.top = Math.floor(Math.random()*100).toString() + "vh";
            box.style.left = Math.floor(Math.random()*100).toString() + "%";
        }
    }
})

frame.addEventListener("mouseleave", (event) => {
    frame.style.boxShadow = "none";

    for (let x=0; x<W; x++) {
        for (let y=0; y<H; y++) {
            box = boxes[x*H+y];
            box.style.top = listPosition[x*H+y].top.toString() + "vh";
            box.style.left = listPosition[x*H+y].left.toString() + "%";
        }
    }
})