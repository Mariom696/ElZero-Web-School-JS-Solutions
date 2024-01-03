// //----------------- task 1 ----------------------------------
// console.log((400 / (190 + 10) + 3 + 15 - 10) % 10);
// //----------------- task 2 ----------------------------------
// let num = 3;

// // Solution One
// console.log(num + num); //6

// // Solution Two
// console.log(num + true + true + true); // 6

// // Soultion Three
// console.log(num * num - num); // 6

// // Soultion Four
// console.log(num++ + --num); // 6

// // Solution Five
// console.log(--num * ++num); // 6

// // Solution Six
// console.log(--num * num + num); // 6
// //----------------- task 3 -----------------------------------
// let a = "10";

// // Solution One
// console.log(+a + +a); // 20

// // Solution Two
// console.log((+a * +a) / +a + +a); // 20

// // Solution Three
// console.log(+a++ + +--a); // 20

// // Solution Four
// console.log(+a-- - +a + a + ++a); // 20
// //--------------- task 4 -------------------------------------
// let points = 10;
// points -= 10;
// points = ++points + points + points;
// points += 10;

// console.log(points); // 13
// points -= 10;
// points = ++points + points;

// console.log(points); // 8;

//-------------------------Operators Challenges---------------------------
// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
console.log(++a + +b++ + +c++ - +a++);
++a = 11
+b++ = 20  (21)
+c++ = 80  (81)
+a++ = 11  (12)
11 + 20 + 80 - 11 = 100
*/

/*
consider the previous values 
console.log(++a + -b + +c++ - -a++ + +a);
++a = 13
-b  = -21
+c++ = 81 (82)
-a++ = -13 (14)
+a = 14
*/
/*
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
--c= 81
+b = 21 
--a = 13 
+b++ = 21 (22)
+b = 22 
a = 13
--a = 12
+true = 1
*/
//--------------------------------------------------------------------
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d * e); //2000
// console.log(-d + ++f + ++e * ++g); //173

///////////////////////////////////////////////////////////////////////////////////
////// uncomment ech code segment one by one cuz there are similar varibale names /
///////////////////////////////////////////////////////////////////////////////////
