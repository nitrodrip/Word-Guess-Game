//Objects.js

// Grab DOM elements
var $newGameButton = document.getElementById('newGameButton');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('guessedLetters');
var $guessesLeft = document.getElementById('guessesLeft');
var $wins = document.getElementById('wins');
var $loses = document.getElementById('loses');

var game = {
 wordBank: ['Zodiac', 'Bundy', 'Dahmer', 'Gacy', 'Berkowitz'];
 wins: 0;
 losses: 0;
 guessesLeft: 8;
 gameRunning: false;
 pickedWord: '';
 pickedWordPlaceholderArr: [];
 guessedLetterBank: [];
 incorrectLetterBank: [];
 newGame: function() {
	//Reset game info
	this.gameRunning = true;
    this.guessesLeft = 8;
    this.guessedLetterBank = [];
    this.incorrectLetterBank = [];
    this.pickedWordPlaceholderArr = [];

//Pick a new word
	this.pickedWord = wordBank[Math.floor(Math.random() * this.wordBank.length)];
    
//Create a placeholder out of new pickWord
     for (var i = 0; i < this.pickedWord.length; i++) {
         
         if (pickedWord[i] === ' ') {
             this.pickedWordPlaceholderArr.push(' ');
         } 
         else {
            this.pickedWordPlaceholderArr.push('_');
        }
      }
     } 
	 
letterGuess: function(letter) {-
	),

checkIncorrect: function(letter) {
	if (this.pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 && 
        this.pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1) 
    {
//Decrease guesses score
        this.guessesLeft--;
        
//Add incorrect letter to incorrectLetterBank
        this.incorrectLetterBank.push(letter);
        
//Write new bank of incorrect letters to DOM
        $guessedLetters.textContent = this.incorrectLetterBank.join(' ');
        
//Write new amount of guesses to the DOM
        $guessesLeft.textContent = this.guessesLeft;
    }
}
	if (this.gameRunning === true && this.guessedLetterBank.indexOf(letter) === -1) {

//Run Game Logic
    this.guessedLetterBank.push(letter);
    
//Check if guessed letter is in my picked word (for loop)
    for (var i = 0; i < pickedWord.length; i++) {
        
//Convert both to lowercase if needed to compare correctly
        if (this.pickedWord[i].toLocaleLowerCase () === )letter.toLowerCase {
            //If match, swap letter that character 
            this.pickedWordPlaceholderArr[i] = this.pickedWord[i];
            } 
        } 
    $placeholders.textContent = pickedWordPlaceholderArr.join('');
    this.checkIncorrect(letter); {
    }
        else {
        if (this.gameRunning  === false) {
            alert ("Press the Play button to Start"); {
        else {
            alert ("You've already Guessed that Letter");
         }
        }
       }
			
      }   
	},
		
//checkLose
checkLoss: function () {
	//Check if lose
    if (this.guessesLeft === 0) {
        this.losses++;
		//end game
        this.gameRunning = false;
        $loses.textContent = this.losses;
        $placeholders.textContent = this.pickedWord;
    }
    checkWin ();
}
	
	

//Resets all game info:
    this.gameRunning = true;
    this.guessesLeft = 8;
    this.guessedLetterBank = [];
    this.incorrectLetterBank = [];
    this.pickedWordPlaceholderArr = [];
	
//Pick a new word
    this.pickedWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    
//Create a placeholder out of new pickWord
     for (var i = 0; i < this.pickedWord.length; i++) {
         
         if (this.pickedWord[i] === ' ') {
             this.pickedWordPlaceholderArr.push(' ');
         } 
         else {
            this.pickedWordPlaceholderArr.push('_');
        }
      }
     } 
    
//Write to the DOM
    $guessesLeft.textContent = this.guessesLeft;
    $placeholders.textContent = this.pickedWordPlaceholderArr.join('');
    $guessedLetters.textContent = this.incorrectLetterBank;
}
}

// Add an Event Listener for newGame button click
$newGameButton.addEventListener('click', function ()); {
game.newGame();								
}

// Add onKeyup event to trigger letterGuess
document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        game.letterGuess(event.key);
    }
}