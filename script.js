const container = document.querySelector(".container");
const reset = document.querySelector("#reset");
const black = document.querySelector("#black");
const rgb = document.querySelector("#rgb");

function promptGridSize() {
    let gridSize = prompt("Enter grid size (1-100): ", "16")

    if (gridSize < 1 || gridSize > 100 || !Number.isInteger(+gridSize)) {
        alert("Invalid. Grid size must be between 1 and 100.");
        promptGridSize();
    } else {
        drawGrid(gridSize);
    }
}

function drawGrid(size) {
    clearContainerNodes();
    container.style.setProperty("--grid-size", size);

    for (let i = 0; i < (size * size); i++) {
        const gridCell = document.createElement("div");
        gridCell.className = "gridCell";
        container.appendChild(gridCell);
    }

    gridCells = document.querySelectorAll('.gridCell');
    colourCells();
}

function clearContainerNodes() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
}

promptGridSize();

function colourCells() {
    gridCells.forEach((gridCell) => {
        gridCell.addEventListener("mouseover", () => {
            gridCell.style.backgroundColor = "blue";
        });
    });
}

function resetGrid() {
    reset.addEventListener("click", () => {
        gridCells.forEach((gridCell) => {
            gridCell.style.backgroundColor = "white";
        });
        promptGridSize();
    });
}

resetGrid();