const container = document.querySelector(".container");

drawGrid(16);

function drawGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        container.style.setProperty("--grid-size", size);
        const gridCell = document.createElement("div");
        gridCell.className = "test";
        //cell.textContent = (i + 1);
        container.appendChild(gridCell);
    }
}

const gridCells = document.querySelector(".test");

gridCells.addEventListener("click", () => {
    console.log("Success!");
})