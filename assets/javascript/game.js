var wins = 0;
var numberGuesses = 2;
//var pic = getImage("assets/images/characters");

function changeGuesses(numberGuesses) {
	while (numberGuesses > -1 ) {
	    numberGuesses--;
	    if (numberGuesses = 0) {
	    	alert("Game over!");

	    } 
	}
	return(numberGuesses);
}

html1 = wins--;
html2 = numberGuesses;
html3 = '<span>C</span>';
html4 = '<span>H</span>';
html5 = '<span>U</span>';
html6 = '<span>K</span>';
html7 = '<span>Y</span>';




addEventListener("click", function() {
	alert('Here we go! Type letters to guess the current word.');
	document.querySelector(".wins").innerHTML = 0;
	document.querySelector(".number-guesses").innerHTML = html2;

});
// var chuckyBlank = ['_', '_', '_', '_', '_', '_'];
// var chucky = ['c', 'h', 'u', 'c', 'k', 'y'];

document.onkeyup=function(event) {
		console.log(event.keyCode);
		// 67=c
		if (event.keyCode == 67) {
			document.querySelector(".blank1").innerHTML = html3;
			document.querySelector(".blank4").innerHTML = html3;
			alert("You got a letter!");
		// 72=h
		} else if (event.keyCode == 72) {
			document.querySelector(".blank2").innerHTML = html4;
			alert("You got a letter!");
		//85=u
		} else if (event.keyCode == 85) {
			document.querySelector(".blank3").innerHTML = html5;
			alert("You got a letter!");
		//75=k
		} else if (event.keyCode == 75) {
			document.querySelector(".blank5").innerHTML = html6;
			alert("You got a letter!");
		//89=y
		} else if (event.keyCode == 89) {
			document.querySelector(".blank6").innerHTML = html7;
			alert("You got a letter!");
		} else if (event.keyCode == 65 || 66 || 68 || 69 || 70 || 71 || 73 || 74 || 76 || 77 || 78 || 79 || 80 || 81 || 82 || 83 || 84 || 86 || 87 || 88 || 90) {
			var x = event.keyCode;
			var y = String.fromCharCode(x);
			// var letterGuesses = [] 
			html8 = '<span>Letters guessed: </span>' + y;
			document.querySelector(".letters-guessed").innerHTML = html8;
				if (numberGuesses == 2) {
					changeGuesses(numberGuesses);
					document.querySelector(".number-guesses").innerHTML = html2--;
				}
		} /*else if (html2 == 0) {
			alert("Game over!");
		}*/
	};
			/*if ((event.keyCode == 67) && (event.keyCode == 72) && (event.keyCode == 85) && (event.keyCode == 75) && (event.keyCode == 89)) {
				alert('You win!');
				var zach = getImage("space/beetleship");
			};*/


			//set var chucky = [] and push results of matching letter to array until array.length = 6.
				







				/*document.querySelector(".number-guesses").innerHTML = guessesLeft;
				} */
			
				/*function decreaseGuesses() {
				var numberGuesses = document.querySelector(".number-guesses");
				var number = -numberGuesses.innerHTML;
				number--;
				computerScore.innerHTML = number;
				};
				decreaseGuesses();*/
/*
function rps() {
    var computerScore = document.getElementById('computerScore');
    var number = computerScore.innerHTML;
    number++;
    computerScore.innerHTML = number;
}


*/


