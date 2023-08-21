const body = document.querySelector("body");
const squaresContainer = document.querySelector(".squares-container");

const width = 1000;
const numSquares = 16;
squaresContainer.style.width = `${width}px`;
squaresContainer.style.border = "1px solid red";
squaresContainer.style.display = "flex";

function addSquares() {
    for(let i = 0; i < numSquares * numSquares; i++) {
        let newSquare = document.createElement("div");
        newSquare.style.border = "1px solid black";
        newSquare.style.margin = "0";
        newSquare.style.padding = "0";
        squaresContainer.appendChild(newSquare);
    }
}

addSquares();