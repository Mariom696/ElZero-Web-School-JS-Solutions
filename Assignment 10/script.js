//******************* Task 1*************************/
// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start; i <= end; i += start) {
//   if (i === exclude) {
//     continue;
//   }
//   console.log(i);
// }
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
//********************* Task 2******************************/
// let start = 10;
// let end = 0;
// let stop = 3;

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
// console.log(`${start}`);
// for (let i = start; i >= stop; i--) {
//   if (i < start) {
//     console.log("0" + i);
//   }
// }
//******************** Task 3*********************************/
// let start = 1;
// let end = 6;
// let breaker = 2;

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
// for (let i = start; i <= end; i++) {
//   console.log(i);
//   for (let j = breaker; j < end; j += breaker) {
//     console.log(`--${j}`);
//   }
// }
//********************* Task 4***************************** */
// let index = 10;
// let jump = 2;

// for (let i = index; i >= 4; i -= jump) {
//   console.log(i);
// }
// // Output
// 10;
// 8;
// 6;
// 4;
//********************* Task 5******************************* */
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// // Output
// // ("1 => Sayed");
// // ("2 => Eman");
// // ("3 => Mahmoud");
// // ("4 => Osama");
// // ("5 => Sameh");
// for (let i = 0; i < friends.length; i++) {
//   if (friends[i].charAt(0) === "A") {
//     continue;
//   }
//   console.log(`"${i} => ${friends[i]}"`);
// }
//********************* Task 6*********************************** */
// let start = 0;
// let swappedName = "elZerO";
// let result = "";
// // Output
// ("ELzERo");

// for (let i = start; i < swappedName.length; i = i + 1) {
//   let char = swappedName.charCodeAt(i);
//   let newChar = char;

//   if (char >= 65 && char <= 90) {
//     newChar = char + 32;
//   } else if (char >= 97 && char <= 122) {
//     newChar = char - 32;
//   }

//   result = result + String.fromCharCode(newChar);
// }
// console.log(result);
//******************* Task 7********************************* */
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
// 2;
// 3;
// 4;
// console.log(mix);
for (let i = ++start; i < mix.length; i++) {
  if (typeof mix[i] === "string") {
    continue;
  }
  console.log(mix[i]);
}
//********************************************************* */
