// VARIABLES IN THE GAME
// establish var for wins, losses, guesses left, guess history
var wins = 0;
var losses = 0;
var numberGuesses = 10;
var emptyString = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

//==================================================================================================================
// FUNCTION OF THE GAME
// have the computer generate a letter
while (emptyString.length < 1) {
    emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
  } 
  console.log(emptyString);

// if guess matches then add wins
function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
  }
// if guess different then add losses
function updateLoses() {
document.querySelector("#losses").innerHTML = "Losses: " + losses;
}
// game over if numberGuesses = 0
function updatenumberGuesses() {
    document.querySelector("#numberGuesses").innerHTML = "Number of guesses left: " + numberGuesses;
    }
//==================================================================================================================
// PROCESS
// user types a letter
document.onkeyup = function(event) {
// which key user typed
var userInput = event.toLowerCase();

// compare the two letters
if (userInput === alphabet) {
    wins++;
    updateWins();
} else {
    losses++;
    updateLoses();
    numberGuesses--;
}
};



