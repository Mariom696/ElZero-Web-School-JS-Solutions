//--------------------------------------------- task 2 ----------------------------------
/*
const h1Element = document.querySelector("h1");

h1Element.style.color = "green";
h1Element.style.fontSize = "80px";
h1Element.style.fontWeight = "bold";
h1Element.style.textAlign = "center";
h1Element.style.fontFamily = "arial";
*/

document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "arial";

//------------------------------------------------ task 3 --------------------------------

console.log(
  " %celzero %cweb %cschool",
  "color: red; font-size: 40px;",
  "color: green; font-size: 40px;  font-weight: bold;",
  "color: wight; font-size: 40px;  font-weight: bold; background-color: blue;"
);
//------------------------------------------------ task 4 ---------------------------------
console.group(" group 1");
console.log("mess one");
console.log("mess two");
console.group("child");
console.log("mess one");
console.log("mess two");
console.group(" grand child");
console.log("mess one");
console.log("mess two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("group 2");
console.log("mess one");
console.log("mess two");
//----------------------------------------------- task 5 ------------------------------------
console.table(["A", "B", "C", "D", "E"]);
//----------------------------------------------- task 6 ------------------------------------
// console.log("Iam In Console");
/*
document.write("Iam In Page");
*/
