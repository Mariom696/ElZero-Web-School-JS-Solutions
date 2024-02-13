//------------------------ switch  challnge  -----------------------------
// let job = "";
// let salary = 0;
// switch (job) {
//   case "Manager":
//     salary = 8000;
//     console.log(salary);
//     break;
//   case "IT":
//   case "support":
//     salary = 6000;
//     console.log(salary);
//     break;
//   case "deveolper":
//   case "desinger":
//     salary = 7000;
//     console.log(salary);
//     break;
//   default:
//     salary = 4000;
//     console.log(salary);
//     break;
// }
////////// another soultion ///////////
let job = "Manager";
let salary = 0;
job === "Manager"
  ? (salary = 8000) && console.log(`the salary is ${salary}`)
  : job === "IT" || job === "Support"
  ? (salary = 6000) && console.log(`the salary is ${salary}`)
  : job === "Developer" || job === "Designer"
  ? (salary = 7000) && console.log(`the salary is ${salary}`)
  : (salary = 4000 && console.log(`the salary is ${salary}`));
///////////////////////////////////////
//--------------------------------------------------------------------
let holidays = "";
let money = 0;

if (holidays === 0) {
  money = 5000;
  console.log(`my money is ${money}`);
}
if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`my money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`my money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`my money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`my money is ${money}`);
}
//------------------- task 1 -----------------------------
/*
task is :
You have a variable that contains the day of the appointment, and using the switch, show a message to the person according to the chosen day, while fulfilling the following conditions:
You must ensure that today's name has no spaces before or after it, and the first letter is capital, even if the name is written in lower case letters
If the value of the variable is Friday, Saturday, or Sunday, it shows that there are no appointments available on these days
If the value of the variable is Monday or Thursday, the available appointments are from ten in the morning until five in the evening
If the value of the variable is Tuesday, the available appointments are from ten in the morning until six in the evening
If the value of the variable is Wednesday, the available times are from ten in the morning until seven in the evening
If the value of the variable is the wrong day, a message appears stating that the day is wrong
 */
let day = "    tuesday";
day = day.trim();
let Day = day.charAt(0).toUpperCase() + day.slice(1);
console.log(Day);
switch (Day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("ts Not A Valid Day");
    break;
}
//----------------------------------------------------------------
