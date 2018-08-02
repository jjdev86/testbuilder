// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  //create variable to hold CreditCard Name
  var cardType = "";
  var ccLength = cardNumber.length;
  //grab first two numers from credit card
  var twoDigits = parseInt((cardNumber.split('').splice(0,2)).join(''));
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if(twoDigits === 38 || twoDigits === 39 && ccLength === 14){
    cardType = "Diner\'s Club";
  }
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if(twoDigits === 34 || twoDigits === 37 && ccLength === 15){
    cardType = 'American Express'
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  return cardType;
};


console.log(detectNetwork('38345678901234'))