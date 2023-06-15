const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "color";
const DEFAULT_COLOR = "#000000";
const DEFAULT_GRAY = 25.5;
const DEFAULT_WHITE = 255;
const DEFAULT_WEIGHT_RED = 0.299;
const DEFAULT_WEIGHT_GREEN = 0.587;
const DEFAULT_WEIGHT_BLUE = 0.114;

let mode = DEFAULT_MODE;
let color = DEFAULT_COLOR;
let size = DEFAULT_SIZE;
let graySlice = DEFAULT_GRAY;
let white = DEFAULT_WHITE;
let weightRed = DEFAULT_WEIGHT_RED;
let weightGreen = DEFAULT_WEIGHT_GREEN;
let weightBlue = DEFAULT_WEIGHT_BLUE;

const inputRange = document.getElementById("slider");
const textRange = document.getElementById("size-canvas");
const canvas = document.getElementById("canvas");
const eraserBtn = document.getElementById("eraser-btn");
const clearBtn = document.getElementById("clear-btn");
const colorBtn = document.getElementById("color-btn");
const inputColor = document.getElementById("color-selector");
const rgbBtn = document.getElementById("rgb-btn");
const grayBtn = document.getElementById("gray-btn");

function textSizeCanvas() {
    textRange.textContent = `${inputRange.value} x ${inputRange.value}`;
}

function createCanvas(size) {
    let widthSquare = canvas.offsetWidth / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        canvas.appendChild(square);
        square.style.cssText = `width: ${widthSquare}px; height: ${widthSquare}px; background-color: rgb(${white}, ${white}, ${white})`;

        square.addEventListener("mousedown", changeColor(e));
    }
}

function changeClearCanvas(size) {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }

    createCanvas(size);
}

function setCurrentMode(newMode) {
    mode = newMode;
}

function changeColor(e) {
    if (mode === "color") {
        e.target.style.cssText = "background-color = inputColor.value";
    }

    if (mode === rgb) {
        const randomR = Math.floor(Math.random * 256);
        const randomG = Math.floor(Math.random * 256);
        const randomB = Math.floor(Math.random * 256);

        e.target.style.cssText = `background-color: rgb(${randomR}, ${randomG}, ${randomB})`;
    }

    if (mode === "gray") {
        let rgb = e.target.style.backgroundColor;

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
}

function eraseColor(e) {
    e.target.style.backgroundColor = `rgb(${white}, ${white}, ${white})`;
}