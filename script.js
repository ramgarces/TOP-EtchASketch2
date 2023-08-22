// Variables
const body = document.querySelector("body");
const squaresContainer = document.querySelector(".squares-container");
const changeSizeButton = document.querySelector(".change-size");

const width = 500;
const height = width;
let numSquares = 16;

squaresContainer.style.width = `${width}px`;
squaresContainer.style.height = `${height}px`;

changeSizeButton.addEventListener("click", function () {
    let newSize = prompt("How many squares per side?", 16);
    if (newSize < 2) {
        numSquares = 2;
    } else if (newSize > 100) {
        numSquares = 100;
    } else {
        numSquares = newSize;
    }
    squaresContainer.innerHTML = "";
    createSquares(numSquares);
});

// Functions
function createSquares(numSquares) {
    for(let i = 0; i < numSquares * numSquares; i++) {
        let newSquare = document.createElement("div");
        addSquareStyle(newSquare);
        squaresContainer.appendChild(newSquare);
        newSquare.addEventListener("mouseover", function () {
            newSquare.style.backgroundColor = "black";
        });
    }; 
}

function addSquareStyle(newSquare) {
    // newSquare.style.border = "1px solid grey";
    newSquare.style.flex = "1 1 auto";
    newSquare.style.width = `${width / numSquares}px`;
    newSquare.style.height = `${height / numSquares}px`
}

createSquares(numSquares);
