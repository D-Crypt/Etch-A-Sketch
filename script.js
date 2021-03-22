const container = document.querySelector(".container");

function drawGrid(size) {
    container.style.setProperty("--grid-size", size);

    for (let i = 0; i < (size * size); i++) {
        const gridCell = document.createElement("div");
        gridCell.className = "gridCell";
        container.appendChild(gridCell);
    }
}

drawGrid(16);

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