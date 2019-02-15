//hardcoded array of colors
// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]

var numOfSquares = 6;

//we want 6 or 3 random colors
var colors = generateRandomColors(numOfSquares); 


var squares = document.querySelectorAll('.square');
// var pickedColor = colors[3];
var pickedColor = pickColor(); //we need it randomly
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var resetButton = document.querySelector('#reset');
var easyButton = document.querySelector('#easy-btn');
var hardButton = document.querySelector('#hard-btn');


//event listener for the easy button
easyButton.addEventListener('click', function(){
	easyButton.classList.add('selected');
	hardButton.classList.remove('selected');

	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		//check ifthere is a color at that
		//index which is true for first 3
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = 'none';
		}
	}
});

//event listener for the hard button
hardButton.addEventListener('click', function(){
	easyButton.classList.remove('selected');
	hardButton.classList.add('selected');

	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = 'block';		
	}
});

//event listener for the reset button
resetButton.addEventListener('click',function(){
	//generate all new colors
	colors = generateRandomColors(numOfSquares); 
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change playAgain back to new colors
	this.textContent = "New Colors?";
	//remove the displayed message
	messageDisplay.textContent = "";
	//change color of all squares
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	//h1 back to normal color
	document.querySelector('.welcome').style.backgroundColor = 'steelblue';
});


colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener('click',function(){
		//grab color of clicked color
		//this refers to whatever is clicked
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = 'Correct';
			resetButton.textContent = 'Play Again?'
			changeColors(clickedColor);
			document.querySelector('.welcome').style.backgroundColor = pickedColor;
		}else{
			//fade the color out
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = 'Try Again';
		}
	});
}

//function to change color of all squares when we hit the right square
function changeColors(color){
	//loop through all squares
	for(var i=0; i<squares.length; i++){
		//changeeach color to match given color
		squares[i].style.backgroundColor = color;
	}
}


//function to choose a color randomly
//remember our array can be of length 3 or 6 (based on difficulty selected by the user)
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]; 
}

//create an empty array and fill it with
//the random colors
function generateRandomColors(num){
	//make an empty array to be filled
	var arr = [];
	//repeat num times
	for(var i=0; i<num; i++){
		//get a random color and push it to 
		//the empty array
		arr.push(randomColors());
	}
	//return the array
	return arr;
}

//function to create the random colors
function randomColors(){
	//pick a red color from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green color from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue color from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}










