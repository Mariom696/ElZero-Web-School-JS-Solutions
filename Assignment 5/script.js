//----------------------- string challnges -------------------
let a = "Elzero Web School";

console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

console.log(a.charAt(13).repeat(8).toUpperCase());

console.log(a.split("", 6));

console.log(`${a.substr(0, 6)} ${a.substr(11, 6)}`);

console.log(
  a.charAt(0).toLowerCase() + a.substring(1, a.length - 1).toUpperCase() + a.charAt(a.length - 1).toLowerCase());
//---------------------- task 1 -------------------------------
let userName = "Elzero";
console.log(userName.slice(3, 4)); // e
console.log(userName[3]); // e
console.log(userName.charAt(3)); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.substr(3, 1)); // e
console.log(userName[3].repeat(3)); // eee
//---------------------- task 2 --------------------------------
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.substring(3).startsWith(letterE)); // True
console.log(word.toUpperCase().endsWith(letterO)); // True
//---------------------------------------------------------------
