const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "color";
const DEFAULT_GRAY_SLICE = 25.5;

let mode = DEFAULT_MODE;
let size = DEFAULT_SIZE;
let graySlice = DEFAULT_GRAY_SLICE;
let white = 255;
let weightRed = 0.299;
let weightGreen = 0.587;
let weightBlue = 0.114;

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

    return this.value;
}

function setTextSizeCanvas(){
    sizeCanvas.textContent = `${slider.value} x ${slider.value}`;
}

function createCanvas() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }

    let widthSquare = canvas.offsetWidth / slider.value;

    for (let i = 0; i < slider.value * slider.value; i++) {
        const square = document.createElement("div");
        canvas.appendChild(square);

        square.style.width = `${widthSquare}px`;
        square.style.height = `${widthSquare}px`;
        square.style.backgroundColor = `rgb(${white}, ${white}, ${white})`;

        square.addEventListener("mousedown", changeColor);
        square.addEventListener("mouseover", changeColor);
    }
}

function setCurrentMode(newMode) {
    mode = newMode;

    if (mode === "color") {
        colorBtn.style.backgroundColor = "green";
        rgbBtn.style.backgroundColor = "white";
        grayBtn.style.backgroundColor = "white";
        eraserBtn.style.backgroundColor = "white";
    }

    if (mode === "rgb") {
        colorBtn.style.backgroundColor = "white";
        rgbBtn.style.backgroundColor = "green";
        grayBtn.style.backgroundColor = "white";
        eraserBtn.style.backgroundColor = "white";
    }

    if (mode === "gray") {
        colorBtn.style.backgroundColor = "white";
        rgbBtn.style.backgroundColor = "white";
        grayBtn.style.backgroundColor = "green";
        eraserBtn.style.backgroundColor = "white";
    }

    if (mode === "eraser") {
        colorBtn.style.backgroundColor = "white";
        rgbBtn.style.backgroundColor = "white";
        grayBtn.style.backgroundColor = "white";
        eraserBtn.style.backgroundColor = "green";
    }
}

function clearCanvas() {
    let nodes = document.getElementById("canvas").childNodes;

    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeName.toLowerCase() === "div") {
            nodes[i].style.backgroundColor = `rgb(${white}, ${white}, ${white})`;
        }
    }
}

function changeColor() {
    if (mode === "color") {
        this.style.backgroundColor = colorSelector.value;
    }

    if (mode === "rgb") {
        let hex = Math.floor(Math.random()*16777215).toString(16);

        this.style.backgroundColor = `#${hex}`;
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
                this.style.backgroundColor = `rgb(${bottom}, ${bottom}, ${bottom})`;
            }
        }
    }

    if (mode === "eraser") {
        this.style.backgroundColor = `rgb(${white}, ${white}, ${white})`;
    }
}

slider.addEventListener("change", setValueInput);
slider.addEventListener("change", setTextSizeCanvas);
slider.addEventListener("change", createCanvas);
colorSelector.addEventListener("change", setValueInput);
clearBtn.addEventListener("click", clearCanvas);
colorBtn.addEventListener("click", function () {setCurrentMode("color");});
rgbBtn.addEventListener("click", function () {setCurrentMode("rgb");});
grayBtn.addEventListener("click", function () {setCurrentMode("gray");});
eraserBtn.addEventListener("click", function () {setCurrentMode("eraser");});

createCanvas();
setTextSizeCanvas();
setCurrentMode(mode);