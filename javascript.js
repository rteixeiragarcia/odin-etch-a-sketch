const inputRange = document.getElementById("slider");
const textRange = document.getElementById("size-canvas");

function changeValueCanvas() {
    textRange.textContent = `${inputRange.value} x ${inputRange.value}`;
}

inputRange.addEventListener("change", changeValueCanvas);