const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "rgb(0, 0, 0)";
const DEFAULT_MODE = "color";
const DEFAULT_GRAY_SLICE = 25.5;

let mode = DEFAULT_MODE;
let size = DEFAULT_SIZE;
let graySlice = DEFAULT_GRAY_SLICE;
let color = DEFAULT_COLOR;

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
    this.setAttribute('value',this.value);
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
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }

    createCanvas(slider.value);
}