function Letter(a){
    this.letter = a;
    this.guessed = false;
    this.char = function(){
        if (this.guessed == true){
            return this.letter;
        }else{
            return " _ "
        }
    }
    this.compare = function(x) {
        if (this.letter == x ){
            this.guessed = true;
        }
    }
};
module.exports = Letter;

// A string value to store the underlying character for the letter

// A boolean value that stores whether that letter has been guessed yet

// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) 
// if the letter has not been guessed

// A function that takes a character as an argument 
// and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly