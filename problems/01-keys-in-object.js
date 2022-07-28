/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns 
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

function keysInObject(obj) {
  //Solution using for loop
      let array = [];
      for (let x in obj){
          array.push(x);
      }
      return array;
  //Solution using Object.keys()
    return Object.keys(obj);
}

let obj = {
    a : 1,
    b : '2',
    c : 'wer',
    d : [1,2,3]
}

console.log(keysInObject(obj));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
