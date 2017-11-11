// Declaring the variables:

var wordBank = ['tokyo', 'paris', 'madrid', 'london', 'frankfurt', 'brussels', 'seattle', 'newyork', 'vancouver'];
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(chosenWord);

var wordToGuessField = document.getElementById("wordToGuess");
var wrongGuessesField = document.getElementById("wrongGuesses");
var guessesRemainingField = document.getElementById("numGuesses");

var wrongGuesses = "";
var chosenWordChars = chosenWord.split("");
var guessedWord = [];
var lettersGuessed = [];
var authorisedLetters = ['a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i',
    'j', 'k', 'l',
    'm', 'n', 'o',
    'p', 'q', 'r',
    's', 't', 'u',
    'v', 'w', 'x',
    'y', 'z'
];
var maxTries = 9;

// Populate the word to be guessed by underscores  
for (var i = 0; i < chosenWord.length; i++) { // loop the chose word
    guessedWord.push("_"); // Populate guessed word by dashes
}

wordToGuessField.innerHTML = guessedWord.join(" "); // join the dashes by a space
guessesRemainingField.innerHTML = maxTries;



document.addEventListener("keyup", function(keyPressed) {

    if (lettersGuessed.indexOf(keyPressed.key) == -1 && // Key pressed is not keyed before
        authorisedLetters.indexOf(keyPressed.key) != -1) { // Key pressed is a letter

        if (maxTries > 0) { // check we still have more tries
            lettersGuessed.push(keyPressed.key); // Push letter to the array of already keyed letters
            console.log("Guessed Letter: " + lettersGuessed);


            if (chosenWord.indexOf(keyPressed.key) == -1) { // Key pressed is not in the chosen word 
                wrongGuesses = wrongGuesses + keyPressed.key + ", "; // Add to wrong letters string
                maxTries--; // Decrease the number of tries

            } else {
                for (var i = 0; i < chosenWordChars.length; i++) { // loop the chosen word
                    if (chosenWordChars[i] == keyPressed.key) // If keyed letter = a letter in the chosen word
                        guessedWord[i] = keyPressed.key; // Populate guessed word array

                }
            }
        }

        wordToGuessField.innerHTML = guessedWord.join(" "); // Seperate words in string by space
        wrongGuessesField.innerHTML = wrongGuesses; // Populate array of wrong guesses


        guessesRemainingField.innerHTML = maxTries; // Populate remaining tries

        if (maxTries == 0) { // Check if tries left
            setTimeout(function() { // Delay execution by 400 milliseconds
                alert("You lost! The word to be guessed was: " + chosenWord); // Lost message alert
                location.reload(); // reload the page
            }, 400);
        }
        if (guessedWord.indexOf("_") == -1) {
            setTimeout(function() { // Delay execution by 400 milliseconds
                alert("You won!"); // Lost message alert
                location.reload(); // reload the page
            }, 400);

        }
        console.log(guessedWord);
    }
});