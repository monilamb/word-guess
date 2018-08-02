var Word = require("./word.js");
var inquirer = require("inquirer");

var wordArr = ["laptop", "car", "whiteboard", "marker", "cellphone"];

var rand = Math.floor(Math.random() * (wordArr.length));
console.log(rand);
var word = new Word(wordArr[rand]);
var count = 0;
var won = false;
function game(round){
    count++;
    if (count < 15){
        console.log("Guess number "+count);
    inquirer.prompt([{
        type: "input",
        name:"l",
        message:"Please enter a letter: "
    }]).then( function(answer){
        word.newGuess(answer.l);
        var help = word.wordString();
        console.log(help);

        if(help.includes("_") == false){
            won = true;
        }

        if (won == true){
            console.log("You won! yay");
        }else{
            game(count);
        }
    }
    );
}else{
    console.log("You lost!");
}


}

game(count);
// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses