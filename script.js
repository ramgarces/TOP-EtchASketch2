const body = document.querySelector("body");
const squaresContainer = document.querySelector(".squares-container");

squaresContainer.style.width = "50%";
squaresContainer.style.border = "1px solid red";

function addSquares() {
    for(let i = 0; i < 16; i++) {
        let newSquare = document.createElement("div");
        newSquare.style.border = "1px solid black";
        squaresContainer.appendChild(newSquare);
    }
}

addSquares();