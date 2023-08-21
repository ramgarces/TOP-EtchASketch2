const body = document.querySelector("body");
const squaresContainer = document.querySelector(".squares-container");

const width = 800;
const height = width;
const numSquares = 16;
squaresContainer.style.width = `${width}px`;
squaresContainer.style.height = `${height}px`;

function addSquares() {
    for(let i = 0; i < numSquares * numSquares; i++) {
        let newSquare = document.createElement("div");
        newSquare.style.border = "1px solid grey";
        newSquare.style.flex = "1 1 auto";
        newSquare.style.width = `${width / numSquares}px`;
        newSquare.style.height = `${height / numSquares}px`
        squaresContainer.appendChild(newSquare);
    }
}

addSquares();