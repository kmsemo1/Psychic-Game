// VARIABLES IN THE GAME
// establish var for wins, losses, guesses left, guess history
var wins = 0;
var losses = 0;
var numberGuesses = 10;
var emptyString = "";
  // have the computer generate a letter
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  while (emptyString.length < 1) {
      emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
//==================================================================================================================
// FUNCTION OF THE GAME


// if guess matches then add wins
function updateWins() {
    document.getElementById("#wins").innerHTML = "Wins: " + wins;
 };
// if guess different then add losses
function updateLosses() {
    document.getElementById("#losses").innerHTML = "Losses: " + losses;
 };
// game over if numberGuesses = 0
function updateGuesses() {
    document.getElementById("#numberGuesses").innerHTML = "Guesses Left: " + numberGuesses;
 };

 //computer's letter
 function computer() {
    document.getElementById("#computer").innerHTML = "Computer's Letter: " + numberGuesses;
 };

 //user's pick
 function history() {
    document.getElementById("#history").innerHTML = "Letter: " + userInput;
 };


//==================================================================================================================
// PROCESS
// user types a letter
document.onkeyup = function (event) {
    // which key user typed
    var userInput = event.key;
  
    // compare the two letters
    if (userInput === alphabet) {
        wins++;
    } else {
        losses++;
        numberGuesses--;
    }
}
};

console.log(userInput);
console.log(alphabet);

