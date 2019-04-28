function run() {
}
if (document.readyState!='loading') run();
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') run();
});

run();

var lettersList = ["drax", "rocket", "groot", "starlord", "gamora", "yondu", "nebula", "ronan", "thanos"]

var gifObjectArray = [ {name : "starlord", src: "https://media1.tenor.com/images/d5b9fa46b027988f9a973c0c031dd305/tenor.gif?itemid=8751846"}, {name : "gamora", src: "https://media.giphy.com/media/Vq8cEuhypGuWY/giphy.gif"}]
console.log(gifObjectArray[0].name)
console.log(gifObjectArray[0].src)

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



function hideGifs() {
document.getElementById("gamoragif").style.display = "none"
document.getElementById("starlordgif").style.display = "none"
document.getElementById("draxgif").style.display = "none"
document.getElementById("rocketgif").style.display = "none"
document.getElementById("grootgif").style.display = "none"
document.getElementById("yondugif").style.display = "none"
document.getElementById("nebulagif").style.display = "none"
document.getElementById("thanosgif").style.display = "none"
document.getElementById("ronangif").style.display = "none"
}

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

hideGifs()
newGame()

document.getElementById('startButton').addEventListener('click', function (event){
    document.getElementById("key-inst").style.display="none"
    document.getElementById("startButton").style.display="none"
    event.preventDefault();
    document.getElementById('game-text').style.display = "block"
    console.log("this is a test")
    winsText.textContent = "Wins: " + wins;
    loseText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses Left: " + guessLeft;
    currentWord.textContent = wordToGuess.join(" ")
})
document.onkeyup = function (event) {
    document.getElementById("key-inst").style.display="none"
    document.getElementById("startButton").style.display="none"
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
                hideGifs()
                document.getElementById("gamoragif").style.display = "block"
            }
            if ((splitWords.join('')) === lettersList[3]) {
                hideGifs()
                document.getElementById("starlordgif").style.display = "block"
            }
            if ((splitWords.join('')) === lettersList[0]) {
                hideGifs()
                document.getElementById("draxgif").style.display = "block"
            }
            if ((splitWords.join('')) === lettersList[1]) {
                hideGifs()
                document.getElementById("rocketgif").style.display = "block"
            }
            if ((splitWords.join('')) === lettersList[2]) {
                hideGifs()
                document.getElementById("grootgif").style.display = "block"
            }
            if ((splitWords.join('')) === lettersList[5]) {
                hideGifs()
                document.getElementById("yondugif").style.display = "block"
            }
            if ((splitWords.join('')) === lettersList[6]) {
                hideGifs()
                document.getElementById("nebulagif").style.display = "block"
            }
            if ((splitWords.join('')) === lettersList[7]) {
                hideGifs()
                document.getElementById("ronangif").style.display = "block"
            }
            if ((splitWords.join('')) === lettersList[8]) {
                hideGifs()
                document.getElementById("thanosgif").style.display = "block"
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
        hideGifs()
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