//SOME AWESOME METHODS FOR STRINGS

const { Console, log } = require("console");

//                                         321
let practice_with_some_strings = "Hello, world";
//an object wrapper around all primitives String(practice_with_some_strings)
// let str = 'hello';
// let temp = new String("new string"); // wrapper object
// console.log(temp);
// temp.custom = 1;
// console.log(temp.custom);


//obtaining portions of a string
//substring and return "ell" ----->
console.log(practice_with_some_strings.substring(1,4));
//slice and return "worl" -----> 
console.log(practice_with_some_strings.slice(7,-2));
//split and return an array of both words -----> 
const splitStr = practice_with_some_strings.split(' ')
//Bonus: what method can take an array of words and put them back together
let king = ("my name is Kvng Eko");
let newKing = king.split(" ");
console.log(newKing);
let sortedKing = king.split(" ").sort();
console.log(sortedKing);
let rejoinedKing = newKing.join(" ");
console.log(rejoinedKing);
//searching a string

//indexOf "H" ---->
let practiceStr = practice_with_some_strings.indexOf("H")
console.log(practiceStr)

//lastIndexOf "l" ----> 
let practiceStr1 = practice_with_some_strings.lastIndexOf("l")
console.log(practiceStr)
//boolean searching funtions

//startsWith "Hello" gives us?---> 

let practiceStr2 = practice_with_some_strings.startsWith("Hello");
console.log(practiceStr2)

//endsWith "!" ---> 
let practiceStr3 = practice_with_some_strings.endsWith("!");
console.log(practiceStr3);
//includes "no" --->
let practiceStr4 = practice_with_some_strings.includes("no");
console.log(practiceStr4)
//creating modified version of a string
//replace "llo" with "ya" ---> "Heya, world"
let practiceStr5 = practice_with_some_strings.replace("llo","ya");
console.log(practiceStr5)
//toLowerCase ---> take a guess lol
let practiceStr6 = practice_with_some_strings.toLowerCase();
console.log(practiceStr6)
//toUpperCase ---> take another guess
let practiceStr7 = practice_with_some_strings.toUpperCase();
console.log(practiceStr7)


//inspecting individual characters of a string
//charAt 0 ---> 
let practiceStr8 = practice_with_some_strings.charAt(0);
console.log(practiceStr8)
//charCodeAt 0  --->
let practiceStr9 = practice_with_some_strings.charCodeAt(0);
console.log(practiceStr9)
//Bonus: find the range of lower and uppercase letters
/a-z/ 
/A-Z/

//space trim funtctions !bonus mess with these methods!
let test = "   test "
//trim test --->
console.log(test.trim())
//Bonus: mess with the other trims
// //trimStart and trimEnd