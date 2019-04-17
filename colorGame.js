var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbHeader = document.querySelector("#rgb");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

for (var i = 0; i < squares.length; i++) {
    //adding initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //adding click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
         var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again";
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}

rgbHeader.textContent = pickedColor;

resetButton.addEventListener("click", function(){
    resetButton.textContent = "New Colors";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    rgbHeader.textContent = pickedColor;
    h1.style.background = "#36c5f0";
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
});

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    rgbHeader.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    rgbHeader.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
})

function changeColors(color){
    //loop through all squares
    for (var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    //generate a random number between 1 and length of colors arrays (3 or 6)
    var random = Math.floor(Math.random() * colors.length);
    //return that number's corresponding array as the chosen one
    return colors[random];
}

function generateRandomColors(num){
   //make an array
   var arr = [];
   //add num random colors to array
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
   //return the array
   return arr;
}

function randomColor(){
    //generate a value between 0 - 255 for Red
    var r = Math.floor(Math.random() * 256);
    //generate a value between 0 - 255 for Green
    var g = Math.floor(Math.random() * 256);
    //generate a value between 0 - 255 for Blue
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}