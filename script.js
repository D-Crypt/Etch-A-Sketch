const container = document.querySelector("#container");

drawGrid(5);

function drawGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        let cell = document.createElement("div");
        cell.textContent = (i + 1);
        container.appendChild(cell);
    }
}