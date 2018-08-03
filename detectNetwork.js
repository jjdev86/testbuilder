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
  var numbers = cardNumber.split('').map(function(el){
    return parseInt(el);
  });
  //create variable that holds prefix that start with 2 digits
  var prefix2 = parseInt(numbers.slice(0,2).join(''));
  var prefix3 = parseInt(numbers.slice(0,3).join(''));
  var prefix4 = parseInt(numbers.slice(0,4).join(''));
  //console.log(prefix2)
  // Visa always has a prefix of 4 and a length of 13, 16, or 19
  if(numbers[0] === 4 && ccLength === 13 || ccLength === 16 || ccLength === 19){
    cardType = "Visa";
  }
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if(prefix2 === 38 || prefix2 === 39 && ccLength === 14){
    cardType = "Diner\'s Club";
  }
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if(prefix2 === 34 || prefix2 === 37 && ccLength === 15){
    cardType = 'American Express'
  }
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16
  if(prefix2 >= 51 || prefix2 <= 55 && ccLength === 16 && numbers[0] !== 4){
    cardType = "MasterCard"
  }
  // Discover network always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19
  if(prefix4 === 6011 || prefix3 >= 644 && prefix3 <= 649 || prefix2 === 65 && ccLength === 16 || ccLength === 19 && numbers[0] !== 4){
    cardType = 'Discover';
  }
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19
  if(prefix4 === 5018 || prefix4 === 5020 || prefix4 === 5038 || prefix4 === 6304 && ccLength >= 12 & ccLength <= 19){
    cardType = 'Maestro';
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  return cardType;
};

console.log(detectNetwork('4123456789012345678'))