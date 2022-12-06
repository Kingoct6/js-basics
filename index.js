// npm init -> will create a file called package.json 
// npmjs.com is used to use other people's code
const cowsay = require("cowsay");
const Quote = require('inspirational-quotes')

console.log(cowsay.say({
    // text : "OX DADDY MILK ME",
    text :Quote.getRandomQuote(),
    e : "$$",
    T : "U "
}));
// const Quote = require('inspirational-quotes');

// console.log(Quote.getQuote()); // returns quote (text and author)
// console.log(Quote.getQuote({ author: false })); // return quote without author
console.log(Quote.getRandomQuote()); // return any random quote

// or cowsay.think()