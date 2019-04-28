# WordGuessGame
* Watch the demo.

* Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

* Use key events to listen for the letters that your players will type.

* Display the following on the page:
Press any key to get started!
Wins: (# of times user guessed the word correctly).



* If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
As the user guesses the correct letters, reveal them: m a d o _  _ a.



* Number of Guesses Remaining: (# of guesses remaining for the user).

* Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

* After the user wins/loses the game should automatically choose another word and make the user play it.

## Problems Experienced and how they were solved:

* Looping through answers to display blank spaces for user to guess, and looping through the answer while matching user input, and displaying correct and incorrect user input accordingly.

* Three arrays were defined, and for-loops were used to compare user input with answer.

* Displaying gifs with each answer.

* If statements are used to match gif with answer, otherwise the gifs are set to be hidden since they initially showed with page load. A cleaner approach can be implemented.

## Technical Approach:

* Practice from a simpler game project helped as a basic structure. I started with the HTML, and spent a lot of time on the Javascript. Console.log helped in checking correct game functionality.

* Character research was used to ensure spelling and accuracy of game, although choices were limited to a small number of main characters.

* Final additions were background animation, and gifs to display with correct answers. Future plans include adding additional background animation.