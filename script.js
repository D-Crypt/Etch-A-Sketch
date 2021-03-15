const container = document.querySelector(".container");

drawGrid(16);

function drawGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        container.style.setProperty("--grid-size", size);
        let cell = document.createElement("div");
        cell.textContent = (i + 1);
        container.appendChild(cell);
    }
}