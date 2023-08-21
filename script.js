const body = document.querySelector("body");
const squaresContainer = document.querySelector(".squares-container");

const width = 500;
const numSquares = 16;
squaresContainer.style.width = `${width}px`;
squaresContainer.style.border = "1px solid red";
squaresContainer.style.display = "flex";
squaresContainer.style.flexWrap = "wrap";
squaresContainer.style.justifyContent = "space-between";

function addSquares() {
    for(let i = 0; i < numSquares * numSquares; i++) {
        let newSquare = document.createElement("div");
        newSquare.style.border = "1px solid black";
        newSquare.style.margin = "0";
        squaresContainer.appendChild(newSquare);
    }
}

addSquares();