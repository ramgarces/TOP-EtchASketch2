// DOM Variables - Selectors
const body = document.querySelector("body");
const squaresContainer = document.querySelector(".squares-container");
const changeSizeButton = document.querySelector(".change-size-button");
const blackSquaresButton = document.querySelector(".black-squares-button");
const rainbowSquaresButton = document.querySelector(".rainbow-squares-button");
const greyscaleSquaresButton = 
    document.querySelector(".greyscale-squares-button");
const eraserButton = document.querySelector(".eraser-button");
const clearButton = document.querySelector(".clear-button");

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
let eraserFlag = false;

// Event listeners
changeSizeButton.addEventListener("click", function () {
    let newSize = prompt("How many squares per side?", 16);
    if (newSize < 2) {
        numSquares = 2;
    } else if (newSize > 100) {
        numSquares = 100;
    } else {
        numSquares = newSize;
    }
    createSquares(numSquares);
});

blackSquaresButton.addEventListener("click", function() {
    blackFlag = true;
    rainbowFlag = false;
    greyscaleFlag = false;
    eraserFlag = false;
    changeActiveButtonBorder();
});

rainbowSquaresButton.addEventListener("click", function () {
    blackFlag = false;
    rainbowFlag = true;
    greyscaleFlag = false;
    eraserFlag = false;
    changeActiveButtonBorder();
})

greyscaleSquaresButton.addEventListener("click", function () {
    blackFlag = false;
    rainbowFlag = false;
    greyscaleFlag = true;
    eraserFlag = false;
    changeActiveButtonBorder();
})

eraserButton.addEventListener("click", function () {
    blackFlag = false;
    rainbowFlag = false;
    greyscaleFlag = false;
    eraserFlag = true;
    changeActiveButtonBorder();
})

clearButton.addEventListener("click", function () {
    createSquares(numSquares);
});

// Functions
function createSquares(numSquares) {
    squaresContainer.innerHTML = "";
    for(let i = 0; i < numSquares * numSquares; i++) {
        let newSquare = document.createElement("div");
        addSquareStyle(newSquare);
        squaresContainer.appendChild(newSquare);
        let squareOpacity = 0;
        newSquare.addEventListener("mouseover", function () {
            if (blackFlag) {
                newSquare.style.backgroundColor = "black";
            } else if (rainbowFlag) {
                newSquare.style.backgroundColor = randomSquareColor();
            } else if (greyscaleFlag) {
                let newOpacity = squareOpacity + 0.1;
                newSquare.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity})`;
                squareOpacity += 0.1;
            } else if (eraserFlag) {
                newSquare.style.backgroundColor = "white";
                
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

function changeActiveButtonBorder() {
    blackSquaresButton.style.border = "";
    blackSquaresButton.style.backgroundColor = "black";

    rainbowSquaresButton.style.border = "";
    rainbowSquaresButton.style.backgroundColor = 
    "linear-gradient(red, orange, yellow, green, blue, indigo, violet)";

    greyscaleSquaresButton.style.border = "";
    greyscaleSquaresButton.style.backgroundColor = "#aaaaaa";

    eraserButton.style.border = "";
    eraserButton.style.backgroundColor = "#c4c4c4";

    if (blackFlag) {
        blackSquaresButton.style.border = "5px solid white";
    } else if (rainbowFlag) {
        rainbowSquaresButton.style.border = "5px solid white";
    } else if (greyscaleFlag) {
        greyscaleSquaresButton.style.border = "5px solid white";
    } else if (eraserFlag) {
        eraserButton.style.border = "5px solid white";
        eraserButton.style.backgroundColor = "green";
    }
}

createSquares(numSquares);
