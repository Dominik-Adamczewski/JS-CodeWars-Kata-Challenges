/*
Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
*/

String.prototype.camelCase = function() {
    let result = '';
    
    const inputString = this;
    
    const arrayOfWords = inputString.split(" ");
    
    const arrayOfLettersPerWord = arrayOfWords.map(word => {
      return word.split('');
    });
    
    arrayOfLettersPerWord.forEach(word => {
      word.forEach((letter, index) => {
        index === 0 ? result += letter.toUpperCase() : result += letter;
      });
    });
    
    return result;
}