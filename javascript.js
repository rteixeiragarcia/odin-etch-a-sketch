const DEFAULT_SIZE = 16;

const inputRange = document.getElementById("slider");
const textRange = document.getElementById("size-canvas");
const canvas = document.getElementById("canvas");
const eraserBtn = document.getElementById("eraser-btn");

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

function clearCanvas() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
}