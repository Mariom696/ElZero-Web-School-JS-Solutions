/* if challnge */
let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log(" 10 to 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("unknown");
}
//----> the short way
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log(" 10 to 40")
  : a > 40
  ? console.log("> 40")
  : console.log("unknown");
//######################################
let st = "Elzero Web School";

if ((st.length + st.length).toString() === "34") {
  console.log("good");
}
//-------------------------- task 1 --------------------
let num = 9;
if (num < 10) {
  console.log(`00${num}`);
} else if (num > 10 && num < 100) {
  console.log(`0${num}`);
} else {
  console.log(num);
}
//---------------------------task 2 -------------------

let num1 = 9;
let str = "9";
let str2 = "20";
if (num1 == str) {
  console.log(`"{${num1}} is the same value as {${str}}"`);
  if (num1 !== str) {
    console.log(
      `"{${num1}} is the same value as {${str}} but not the same type"`
    );
  }
}
if (num1 !== str2) {
  console.log(
    `"{${num1}} is  not the same value or the same type as {${str2}} "`
  );
}
if (str !== str2) {
  console.log(
    `"{${str}} is the same type as {${str2}} but not the same value"`
  );
}
