function createGrid(size) {
    const container = document.querySelector("#container");
    container.innerHTML = '';

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseenter", (event) => event.target.style.cssText =
                `background-color: rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function init() {
    createGrid(16);

    const createButton = document.querySelector("#create");
    createButton.addEventListener("click", () => {
        let x = prompt("Enter a size of new grid (1-100)");
        if (!Number.isInteger(x) || +x <= 0 || +x > 100) {
            console.error(`Invalid size ${x}`);
            return;
        }
        createGrid(+x);
    })
}

document.addEventListener("DOMContentLoaded", init);
