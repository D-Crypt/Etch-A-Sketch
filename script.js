const container = document.querySelector(".container");

function promptGridSize() {
    let gridSize = prompt("Enter grid size (1-100): ", "16")

    /* TODO: Check for integer inputs only. */

    if (gridSize <= 0 || gridSize > 100) {
        alert("Invalid. Grid size must be between 1 and 100.");
        promptGridSize();
    } else {
        drawGrid(gridSize);
    }
}

function drawGrid(size) {
    container.style.setProperty("--grid-size", size);

    for (let i = 0; i < (size * size); i++) {
        const gridCell = document.createElement("div");
        gridCell.className = "gridCell";
        container.appendChild(gridCell);
    }
}

promptGridSize();
const gridCells = document.querySelectorAll(".gridCell");

function colourCells() {
    gridCells.forEach((gridCells) => {
        gridCells.addEventListener("mouseover", () => {
            //gridCells.style.backgroundcolor = "blue";
            console.log("Success");
        })
    });
}

colourCells();