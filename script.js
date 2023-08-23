// DOM Variables - Selectors
const body = document.querySelector("body");
const squaresContainer = document.querySelector(".squares-container");
const changeSizeButton = document.querySelector(".change-size");
const blackSquaresButton = document.querySelector(".black-squares-button");
const rainbowSquaresButton = document.querySelector(".rainbow-squares-button");
const darkenSquaresButton = document.querySelector(".darken-squares-button");

// Container variables
const width = 500;
const height = width;
let numSquares = 16;

squaresContainer.style.width = `${width}px`;
squaresContainer.style.height = `${height}px`;

// Color flag variables
let blackFlag = true;
let rainbowFlag = false;
let greyscaleFlag = false;

// Button event listeners
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

blackSquaresButton.addEventListener("click", function() {
    blackFlag = true;
    rainbowFlag = false;
    greyscaleFlag = false;
});

rainbowSquaresButton.addEventListener("click", function () {
    blackFlag = false;
    rainbowFlag = true;
    greyscaleFlag = false;
})

darkenSquaresButton.addEventListener("click", function () {
    blackFlag = false;
    rainbowFlag = false;
    greyscaleFlag = true;
})

// Functions
function createSquares(numSquares) {
    for(let i = 0; i < numSquares * numSquares; i++) {
        let newSquare = document.createElement("div");
        addSquareStyle(newSquare);
        squaresContainer.appendChild(newSquare);
        let squareOpacity = 0;
        newSquare.addEventListener("mouseover", function () {
            if (blackFlag) {
                newSquare.style.backgroundColor = "black";
            } else if (rainbowFlag) {
                newSquare.style.backgroundColor = randomSquareColor(); //random color
            } else if (greyscaleFlag) {
                let newOpacity = squareOpacity + 0.1;
                newSquare.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity})`;
                squareOpacity += 0.1;
            }
        });
    };
}

function addSquareStyle(newSquare) {
    newSquare.style.flex = "1 1 auto";
    newSquare.style.width = `${width / numSquares}px`;
    newSquare.style.height = `${height / numSquares}px`
}

function randomSquareColor() {
    let num1 = Math.floor(Math.random() * 256);
    let num2 = Math.floor(Math.random() * 256);
    let num3 = Math.floor(Math.random() * 256);
    return `rgb(${num1}, ${num2}, ${num3})`
}

createSquares(numSquares);
