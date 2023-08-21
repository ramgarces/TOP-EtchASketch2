const body = document.querySelector("body");
const squaresContainer = document.querySelector(".squares-container");

const width = 500;
const height = width;
const numSquares = 16;
squaresContainer.style.width = `${width}px`;
squaresContainer.style.height = `${height}px`;
squaresContainer.style.border = "1px solid red";
squaresContainer.style.display = "flex";
squaresContainer.style.flexWrap = "wrap";

function addSquares() {
    for(let i = 0; i < numSquares ** 2; i++) {
        let newSquare = document.createElement("div");
        newSquare.style.border = "1px solid black";
        newSquare.style.margin = "0";
        newSquare.style.width = `${width / numSquares - 1}px`;
        newSquare.style.height = `${height / numSquares - 1}px`;
        squaresContainer.appendChild(newSquare);
    }
}

addSquares();