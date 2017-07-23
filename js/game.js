var numSquares = 6
// Makes an array of random colors according to the number input
var colors = generateRandColors(numSquares);
// Document divs called squares are selected
var squares = document.querySelectorAll('.square');
// Chooses a random value from the array of colors
var pickedColor = colorRandomizer(colors);
// This span will be renamed to the RGB color value picked at random
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
// Selected message for future use
var messageDisplay = document.querySelector('#message');
// Selects the H1 Tags, since there is only one H1 Tag it selects it
var h1 = document.querySelector('h1');
// Selects the buttons
var resetButton = document.getElementById('reset');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.querySelector('#hardBtn');

function setSquares(button) {
	easy = document.getElementById('easyBtn');
	hard = document.getElementById('hardBtn');
	button.addEventListener('click', function() {
		if(button === easy) {
			// Change the button color which is clicked
			easyBtn.classList.add('selected');
			hardBtn.classList.remove('selected');
			numSquares = 3;
		} else if (button === hard) {
			hardBtn.classList.add('selected');
			easyBtn.classList.remove('selected');
			numSquares = 6;
		}
		colors = generateRandColors(numSquares);
		pickedColor = colorRandomizer(colors);
		for (var i = 0; i < squares.length; i++) {
			if(colors[i]) {
				squares[i].style.display = 'Block';
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = 'None';
			}
		}
	});
}
// Makes the buttons functional
setSquares(easyBtn);
setSquares(hardBtn);

resetButton.addEventListener('click', function() {
	// Generate new colors
	colors = generateRandColors(numSquares);
	// Pick random color from array
	pickedColor = colorRandomizer(colors);
	colorDisplay.textContent = pickedColor;
	// Change colors of squares
	squaresColors();
	// Make reset button its default text
	resetButton.textContent = 'New Colors';
	// Resets h1 color
	h1.style.backgroundColor = 'steelblue';
	// Message becomes nothing again
	messageDisplay.textContent = '';
})

function squaresColors() {
	// Giving the squares their properties
	for (var i = 0; i < squares.length; i++) {
		// Add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		// Add click listeners to squares
		squares[i].addEventListener('click', function() {
			// Grab color
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = 'Correct!';
				// All squares become the correct color
				changeColors(pickedColor, squares);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = 'Play Again?';
			} else {
				// Tells us that the square was not correct and makes it disappear
				messageDisplay.textContent = 'Try again';
				this.style.backgroundColor = '#232323';
			}
		});
	}
}
squaresColors();
function changeColors(colorAllSquaresWillBe, squares) {
// Loop through all squares
for (var i = 0; i < squares.length; i++) {
	// Change each color to match given color
	squares[i].style.backgroundColor = colorAllSquaresWillBe;
	}
}
// Generates random colors based on what number is decided
function generateRandColors(num) {
	var arr = [];
	// Number of colors are pushed
	for (var i = 1; i <= num; i++) {
		var color = generateColor()
		// console.log(color);
		arr.push(color);
	}
	return arr;
}
// This function generates one color
function generateColor() {
	// For loop for generating a color
	var color = 'rgb(';
	for (var i = 1; i <= 3; i++) {
		color += Math.floor(Math.random() * 256) + ', ';
	}
	color = color.substring(0, color.length - 2);
	color += ')';
	return color;
}
// Chooses a color from the array of colors
function colorRandomizer(arr) {
	var random = Math.floor(Math.random() * arr.length);
	return arr[random];
}
