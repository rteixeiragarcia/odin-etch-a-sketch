const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "color";
const DEFAULT_GRAY_SLICE = 25.5;

let mode = DEFAULT_MODE;
let size = DEFAULT_SIZE;
let graySlice = DEFAULT_GRAY_SLICE;
let white = 255;

let canvas = document.getElementById("canvas");
let sizeCanvas = document.getElementById("size-canvas");
let slider = document.getElementById("slider");
let eraserBtn = document.getElementById("eraser-btn");
let clearBtn = document.getElementById("clear-btn");
let colorBtn = document.getElementById("color-btn");
let colorSelector = document.getElementById("color-selector");
let rgbBtn = document.getElementById("rgb-btn");
let grayBtn = document.getElementById("gray-btn");

function setValueInput() {
    this.setAttribute("value",this.value);
}

function setTextSizeCanvas(size){
    sizeCanvas.textContent = `${size} x ${size}`;
}

function createCanvas(size) {
    let widthSquare = canvas.offsetWidth / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        canvas.appendChild(square);

        square.style.width = widthSquare;
        square.style.height = widthSquare;
        square.style.backgroundColor = "rgb(255, 255, 255)";
    }
}

function setCurrentMode(newMode) {
    mode = newMode;
}

function clearCanvas() {
    let nodes = document.getElementById("canvas").childNodes;

    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeName === "div") {
            nodes[i].style.backgroundColor = "rgb(255, 255, 255)";
        }
    }
}

function changeColor() {
    if (mode === "color") {
        let bigint = parseInt(colorSelector.value, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;

        let rgb = `rgb(${r}, ${g}, ${b})`;

        this.style.backgroundColor = rgb;
    }

    if (mode === "rainbow") {
        const randomR = Math.floor(Math.random * 256);
        const randomG = Math.floor(Math.random * 256);
        const randomB = Math.floor(Math.random * 256);

        this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }

    if (mode === "gray") {
        let rgb = this.style.backgroundColor;

        rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');

        let r = Number(rgb[0]);
        let g = Number(rgb[1]);
        let b = Number(rgb[2]);

        let gray = Math.floor(r * weightRed + g * weightGreen + b * weightBlue);

        for(let i = 1; i <= 10; i++) {
            let bottom = Math.floor(white - i * graySlice);
            let upper = Math.floor(white - (i - 1) * graySlice);

            if (gray >= bottom && gray <= upper) {
                e.target.style.backgroundColor = `rgb(${bottom}, ${bottom}, ${bottom})`;
            }
        }
    }

    if (mode === "eraser") {
        this.style.backgroundColor = `rgb(${white}, ${white}, ${white})`;
    }
}