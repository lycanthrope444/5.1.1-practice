// String Practice 1

var saying = "this is a string";
console.log(saying);
// Strings can be sliced, returning some number of characters from the string.
// Strings can turned into an array with the split function.
// Strings can be stored in arrays and objects.

var combinedSaying = "This string contains my first string, with the saying: " + saying;
console.log(combinedSaying);

for (i=0; i<combinedSaying.length; i++){
  console.log(combinedSaying[i]);
}

// Array Practice

var firstArray = [1, true, "A"];

//Arrays can have all data types stored in them, including other arrays.
//Arrays have several methods unique to them in javascript, like reverse and combine, that can change their contents.
//Arrays can be used to store information with push().

console.log(firstArray[1]);

firstArray.push("B");

for (i=0; i<firstArray.length; i++){
  console.log(firstArray[i]);
  console.log(typeof firstArray[i]);
}

//Object Practice

var practiceObject = {
  created: "first",
  type: "this is an object",
  exists: true
};

// Objects, like arrays can be used to store all types of data.
// Objects also have their own unique methods associated with them.
// Objects can also refer to themselves with the this command.

console.log(practiceObject.type);

practiceObject.fourth = [1,2,3];

console.log(practiceObject);

// This new array can have all of the methods called on it that any other array can. Items can be added to the array inside that object.


// Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


//http://stackoverflow.com/questions/5488028/how-do-i-check-for-vowels-in-javascript - little assist from them
function disemvowel(str) {
  function isNotVowel(c) {
    return [' ', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', '.', '!' ].indexOf(c.toLowerCase()) !== -1;
  }
  var newStr = str.split("");
  str = newStr.filter(isNotVowel).join("");
  console.log(str);
  return str;
}

console.assert(disemvowel("This website is for losers LOL!") === "Ths wbst s fr lsrs LL!");

// Write a method complements(array, number)
// which returns true if any two numbers in
// the array sum to the number.

function complements(array, number){
  var doesComplement = false;
  array.forEach(function(item, index, wholeArray){
    for (i=index+1; i<wholeArray.length; i++){
      if (item + wholeArray[i] === number){
        doesComplement = true;
      }
    }
  });
  return doesComplement;
}

var odds = [1, 3, 5, 7, 9, 11];
var ints = [-11, 40, 17, -5, -1, -11, 2, 9];

console.assert( complements(odds, 4) === true );
console.assert( complements(odds, 1) === false );
console.assert( complements(ints, -22) === true );
console.assert( complements(ints, 16) === true );
console.assert( complements(ints, 40) === false );


// Array.forEach(callback) passes
// (value, index, array) to the
// callback each iteration
//
// i.e.
//
// function log(v, i){
//      console.log(v, i)
// }
//
// ['a', 'b', 'c'].forEach(log)
//
// --> a, 0
// --> b, 1
// --> c, 2
//
// Write a function forEach(array, callback)
// that takes an array and callback function,
// and passes each (value, index, array) to
// the callback

function forEach(array, callback){
    for (i=0; i<array.length; i++){
      callback(array[i], i, array);
    }
}

// tests
function IHazValue(value, index, array){
    console.assert(typeof value !== "undefined");
}
forEach([1, 2, 3], IHazValue);

function IHazIndex(value, index, array){
    console.assert(typeof index === "number");
}
forEach([1, 2, 3], IHazIndex);

function IHazArray(value, index, array){
    console.assert(array instanceof Array);
}
forEach([1, 2, 3], IHazArray);
