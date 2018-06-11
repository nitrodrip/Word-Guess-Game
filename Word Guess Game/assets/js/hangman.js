// Grab DOM elements
var $newGameButton = document.getElementById('new-game-button');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('guessed-letters');
var $guessesLeft = document.getElementById('guesses-left');
var $wins = document.getElementById('wins');
var $loses = document.getElementById('loses');

//Create game Vars (wordBank, wins, loses, pickedword, guesses left, game running, picked word placeholder, guessed letter bank, incorrect letter bank)

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
    function newGame() {
    
//Resets all game info:
    gameRunning = true;
    guessesLeft = true;
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
    guessedLetterBank.pash(letter);
    
    //Check if guessed letter is in my picked word
    for (var i = 0; i < pickedWord.length; i++) {
        
    //Convert to lowercase if needed to compare correctly
        if (pickedWord[i].toLocaleLowerCase () === )letter.toLowerCase {
            //If match, swap letter that character 
            pickedWordPlaceholderArr[i] === pickedWord[i];
            }
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
}

//checkIncorrect(letter)

//checkLose

//checkWin

// Event Listener for new game button
$newGameButton.addEventListener('click', newGame)

// Add onKeyup event to trigger letterGuess