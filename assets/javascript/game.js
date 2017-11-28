// VARIABLES IN THE GAME
// establish var for wins, losses, guesses left, guess history
var wins = 0;
var losses = 0;
var numberGuesses = 10;
var emptyString = "";

// computer's options 
/*
var alphabet = "abcdefghijklmnopqrstuvwxyz";
while (emptyString.length < 1) {
    emptyString += alphabet[Math.floor(Math.random() * alphabet.length)]; 
    */
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
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
    document.getElementById("numberGuesses").innerHTML = "Guesses Left: " + numberGuesses;
};

//computer's letter
function computer() {
    document.getElementById("computer").innerHTML = "Computer's Letter: " + numberGuesses;
};

//user's pick
function history() {
    document.getElementById("history").innerHTML = "Letter: " + userInput;
};


//==================================================================================================================
// PROCESS
// user types a letter
document.onkeyup = function (userInput) {
    // which key user typed
    var userInput = event.key;
    //computer picks a letter
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    // compare the two letters
    if (userInput === computerGuess) {
        wins++;
    } else {
        losses++;
        numberGuesses--;
    } return userInput;
};

console.log(userInput);
console.log(alphabet);

