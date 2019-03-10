function run() {
}
if (document.readyState!='loading') run();
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') run();
});

run();

var lettersList = ["drax", "rocket", "groot", "starlord", "gamora", "yondu", "nebula", "ronan", "thanos"]

var wins = 0
var losses = 0
var guessLeft = 10
var userLetters= []
var splitWords = []
var wordToGuess = []

var winsText = document.getElementById("userwins-text");
var loseText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-left");
var guessedLetters = document.getElementById("guessed-letters");
var currentWord = document.getElementById("current-word");
var answerText= document.getElementById("answer");

document.getElementById("gamoragif").style.display = "none"
document.getElementById("starlordgif").style.display = "none"
document.getElementById("draxgif").style.display = "none"
//document.getElementById("").style.display = "none"
//document.getElementById("").style.display = "none"
//document.getElementById("").style.display = "none"
//document.getElementById("").style.display = "none"

function youGuessed() {
    guessedLetters.textContent = "You Guessed:" + userLetters.join(" ")
};

function answerWas() {
    answerText.textContent = "The Answer Was: " + splitWords.join('')
};

function newGame() {
var lettersListRand = lettersList[Math.floor(Math.random() * lettersList.length)];
console.log(lettersListRand)
splitWords = lettersListRand.split('')
console.log(splitWords)

for (let i = 0; i < splitWords.length; i++) {
    wordToGuess.push("_")
    console.log(wordToGuess)
}
};

newGame()

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();

    if (splitWords.indexOf(userGuess) > -1 ) {
        for (let i = 0; i < splitWords.length; i++) {
            if (splitWords[i] === userGuess) {
                wordToGuess[i] = userGuess;
                console.log(wordToGuess)
                currentWord.textContent = wordToGuess.join(" ")
            }
        }
        if (wordToGuess.indexOf("_")=== -1){//if word is complete
            wins++;
            if ((splitWords.join('')) === lettersList[4]) {
            document.getElementById("gamoragif").style.display = "block"
            document.getElementById("starlordgif").style.display = "none"
            document.getElementById("draxgif").style.display = "none"
            }
            if ((splitWords.join('')) === lettersList[3]) {
            document.getElementById("gamoragif").style.display = "none"
            document.getElementById("starlordgif").style.display = "block"
            document.getElementById("draxgif").style.display = "none"
            }
            if ((splitWords.join('')) === lettersList[0]) {
            document.getElementById("gamoragif").style.display = "none"
            document.getElementById("starlordgif").style.display = "none"
            document.getElementById("draxgif").style.display = "block"
            }
            answerWas();
            beginGameAgain();
        }
    }
    else if (wordToGuess.indexOf(userGuess) === -1){
        guessLeft--;
        userLetters.push(" " + userGuess);
        youGuessed()
    }
    if (guessLeft === 0) {
        losses++;
        answerWas();
        beginGameAgain();
    }

    winsText.textContent = "Wins: " + wins;
    loseText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses Left: " + guessLeft;
    currentWord.textContent = wordToGuess.join(" ")
};


function beginGameAgain() {
    guessLeft = 10
    userLetters= []
    splitWords = []
    wordToGuess = []
newGame()
youGuessed()
}