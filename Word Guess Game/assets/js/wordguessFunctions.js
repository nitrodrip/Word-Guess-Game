//Functions

// Grab DOM elements
var $newGameButton = document.getElementById('newGameButton');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('guessedLetters');
var $guessesLeft = document.getElementById('guessesLeft');
var $wins = document.getElementById('wins');
var $loses = document.getElementById('loses');

//Create game vars: wordBank, wins, loses, pickedword, guesses left, game running, picked word placeholder, guessed letter bank, incorrect letter bank)

var wordBank = ['Zodiac', 'Bundy', 'Dahmer', 'Gacy', 'Berkowitz'];
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var gameRunning = false;
var pickedWord = '';
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];

//newGame function to pick new word and create placeholders
    function newGame()  {
    
//Resets all game info:
    gameRunning = true;
    guessesLeft = 8;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholderArr = [];
    
//Pick a new word
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    
//Create a placeholder out of new pickWord
     for (var i = 0; i < pickedWord.length; i++) {
         
         if (pickedWord[i] === ' ') {
             pickedWordPlaceholderArr.push(' ');
         } 
         else {
            pickedWordPlaceholderArr.push('_');
        }
      }
     } 
    
//Write to the DOM
    $guessesLeft.textContent = guessesLeft;
    $placeholders.textContent = pickedWordPlaceholderArr.join('');
    $guessedLetters.textContent = incorrectLetterBank;

//letterGuess function 
function letterGuess(letter) {
console.log(letter);
    
    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {

//Run Game Logic
    guessedLetterBank.push(letter);
    
//Check if guessed letter is in my picked word (for loop)
    for (var i = 0; i < pickedWord.length; i++) {
        
//Convert both to lowercase if needed to compare correctly
        if (pickedWord[i].toLocaleLowerCase () === )letter.toLowerCase {
            //If match, swap letter that character 
            pickedWordPlaceholderArr[i] = pickedWord[i];
            } 
        } 
    $placeholders.textContent = pickedWordPlaceholderArr.join('');
    checkIncorrect(letter); {
    }
        else {
        if (gameRunning  === false) {
            alert ("Press the Play button to Start"); {
        else {
            alert ("You've already Guessed that Letter");
         }
        }
        }
       }   
    } 

//checkIncorrect(letter)
function checkIncorrect (letter) {
    
//Check if letter DIDN'T make it in our pickedWordPlaceholder i.e incorrect guess
    if (pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 && 
        pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1) 
    {
//Decrease guesses score
        guessesLeft--;
        
//Add incorrect letter to incorrectLetterBank
        incorrectLetterBank.push(letter);
        
//Write new bank of incorrect letters to DOM
        $guessedLetters.textContent = incorrectLetterBank.join(' ');
        
//Write new amount of guesses to the DOM
        $guessesLeft.textContent = guessesLeft;
    }
}
//checkLose
function checkLose() {
    if (guessesLeft === 0) {
        losses++;
        gameRunning = false;
        $loses.textContent = losses;
        $placeholders.textContent = pickedWord;
    }
    checkWin ();
}

//checkWin
function checkWin() {
    if (pickedWord.toLowerCase() === pickedWordPlaceholderArr.join('').toLocaleLowerCase())
        {
            wins++;
            gameRunning = false;
            $wins.textContent = wins;
        }    
}

// Add an Event Listener for newGame button click
$newGameButton.addEventListener('click', newGame);

// Add onKeyup event to trigger letterGuess
document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);
    }
}