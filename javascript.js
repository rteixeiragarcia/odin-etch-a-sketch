const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "color";
const DEFAULT_COLOR = "#000000";
const DEFAULT_gray = 0.0;

let mode = DEFAULT_MODE;
let color = DEFAULT_COLOR;
let size = DEFAULT_SIZE;
let gray = DEFAULT_gray;

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
        square.style.cssText = `width: ${widthSquare}px; height: ${widthSquare}px; border: 1px solid black`;
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
        
    }
}