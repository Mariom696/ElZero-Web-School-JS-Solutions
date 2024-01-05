//--------------------- number challange ------------------------
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(Math.trunc(Math.min(a, b, c, d)));
console.log(Math.pow(a, Math.trunc(d)));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(parseInt(d.toFixed()));
console.log(parseInt(d));
console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 String
console.log(Math.round(parseInt(b) / Math.ceil(d))); // 67 Number

//-------------------- task 1 -----------------------------------
// console.log(100_000);
console.log(100000);
console.log(5e4 + 5e4);
console.log(10 ** 5); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(+"100000"); // 100000
console.log(1e5); // 100000
console.log(10_0_0_0_0); // 100000
console.log(10 ** 4 * 10); // 100000
console.log(parseInt("100000")); // 100000
console.log(2e4 * 5); // 100000
console.log(10 ** 3 * 1e2); // 100000
//--------------------- task 2 ---------------------------------
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
//-------------------- task 3 ----------------------------------
console.log(
  Math.floor(
    Math.sqrt(
      Math.sqrt(Math.sqrt(Math.sqrt(Math.sqrt(Number.MAX_SAFE_INTEGER))))
    )
  ) +
    Math.floor(
      Math.sqrt(Math.sqrt(Math.sqrt(Math.sqrt(Number.MAX_SAFE_INTEGER))))
    ) +
    Math.ceil(
      Math.sqrt(
        Math.sqrt(Math.sqrt(Math.sqrt(Math.sqrt(Number.MAX_SAFE_INTEGER))))
      )
    )
);
//--------------------- task 4 ------------------------------------
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57
//-------------------- task 5 --------------------------------------
let num = 10;

console.log(+Number.isInteger(num) + +Number.isInteger(num)); // 2
//-------------------- task 6 --------------------------------------
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(flt.toFixed()); // 10
//-------------------- task 7 --------------------------------------
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
