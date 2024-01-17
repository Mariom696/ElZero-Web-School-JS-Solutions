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
