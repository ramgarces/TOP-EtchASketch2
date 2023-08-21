const body = document.querySelector("body");
const squaresContainer = document.querySelector(".squares-container");

const height = 1000;
squaresContainer.style.width = `${height}px`;
squaresContainer.style.border = "1px solid red";
squaresContainer.style.display = "flex";

function addSquares() {
    for(let i = 0; i < 16; i++) {
        let newSquare = document.createElement("div");
        newSquare.style.border = "1px solid black";
        squaresContainer.appendChild(newSquare);
    }
}

addSquares();