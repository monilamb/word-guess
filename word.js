var Letter = require("./letter.js");

function Word(w){

    this.arrLetters = [];
    arr = w.split("");

    for(var i =0; i < arr.length;i++){
        var c = new Letter(arr[i]);
        this.arrLetters.push(c);
    }

    
    this.wordString = function(){
        var word = "";
        for (var i = 0; i < this.arrLetters.length; i++){
            word += this.arrLetters[i].char();
        }
        return word;
    }
    this.newGuess = function(x){
        for (var i = 0; i < this.arrLetters.length; i++){
            this.arrLetters[i].compare(x);
        }
    }

};


module.exports = Word;

// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting to guess. That means the constructor 
// should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the function on 
// each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess 
// function on each letter object (the second function defined in Letter.js)