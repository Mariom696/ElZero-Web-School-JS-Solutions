// /* if challnge */
// let a = 10;

// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log(" 10 to 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("unknown");
// }
// //----> the short way
// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log(" 10 to 40")
//   : a > 40
//   ? console.log("> 40")
//   : console.log("unknown");
//######################################
// let st = "Elzero Web School";

// if ((st.length + st.length).toString() === "34") {
//   console.log("good");
// }

// if (
//   st
//     .slice(st.indexOf("W"), st.indexOf("W") + 1)
//     .toLowerCase()
//     .toString() === "w"
// ) {
//   console.log("good");
// }
// if (st !== "string") {
//   console.log("good");
// }
// if (typeof +st === "number") {
//   console.log("good");
// }
// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//   console.log("good");
// }
// //--------------------------task 1 --------------------
// let num = 9;
// if (num < 10) {
//   console.log(`00${num}`);
// } else if (num > 10 && num < 100) {
//   console.log(`0${num}`);
// } else {
//   console.log(num);
// }
// //---------------------------task 2 -------------------

// let num1 = 9;
// let str = "9";
// let str2 = "20";
// if (num1 == str) {
//   console.log(`"{${num1}} is the same value as {${str}}"`);
//   if (num1 !== str) {
//     console.log(
//       `"{${num1}} is the same value as {${str}} but not the same type"`
//     );
//   }
// }
// if (num1 !== str2) {
//   console.log(
//     `"{${num1}} is  not the same value or the same type as {${str2}} "`
//   );
// }
// if (str !== str2) {
//   console.log(
//     `"{${str}} is the same type as {${str2}} but not the same value"`
//   );
// }
//----------------------------task 3 --------------------
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if (
//   +num3 > num1 &&
//   num3 !== num2 &&
//   num3 > num1 &&
//   num3 == num2 &&
//   num3 != num1 &&
//   num3 !== num2
// ) {
//   console.log(
//     `"${num3} is larger than ${num1}And Type string Not The Same Type As number
// "${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type string Not The Same Type As number" +
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"`
//   );
// }

//----------------------------task 4 --------------------

// let num1 = 10;
// let num2 = 10;
// let num3 = "10";
// let num4 = 20;

// Condition 1

// let num1 = 20;
// let num2 = 10;
// let num3 = "10";
// let num4 = 20;

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Condition 2

// let num1 = 15;
// let num2 = 10;
// let num3 = "10";
// let num4 = 20;
// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Condition 3

// let num1 = "10";
// let num2 = 5;
// let num3 = "10";
// let num4 = 20;

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Condition 4

// let num1 = 10;
// let num2 = 10;
// let num3 = "10";
// let num4 = 25;

// if (num1 + num2 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Condition 5

// let num1 = 10;
// let num2 = 10;
// let num3 = +"10";
// let num4 = 25;
// if (num1 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Condition 6

// let num1 = 10;
// let num2 = 10;
// let num3 = +"10";
// let num4 = 35;
// if (num1 + num2 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Condition 7

// let num1 = 20;
// let num2 = 11;
// let num3 = +"10";
// let num4 = 40;
// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }
