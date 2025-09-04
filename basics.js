// ============================================================
// ==================     VARIABLES      =========================
// ============================================================

let a = 25;
let b = 30;

console.log(a + b);

let san = "sanket";
console.log("Hello " + san);

// Objects
let person = {
  name: "sanket",
  age: 25,
};

console.log(person);

// ============================================================
// ==================     ARRAYS      =========================
// ============================================================

let fruits = ["apple", "banana", "grapes"];
console.log(fruits);
console.log(fruits[1]);

fruits.push("mango");
console.log(fruits);

// remove last element
fruits.pop();
console.log(fruits);

let arr2 = [10, 20, 30, 40, 50];

// add first
console.log(arr2.unshift(1));
console.log(arr2);

// remove first
console.log(arr2.shift());
console.log(arr2);

// end last
console.log(arr2.push(70));
console.log(arr2);

// remove last
console.log(arr2.pop(70));
console.log(arr2);

// ============================================================
// ==================     STRING      =========================
// ============================================================

let str = "Hello World";
console.log(str);
console.log(str.length);
console.log(str.charAt(2));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Slice
console.log(str.slice(0, 4)); // "Java"

// Substring
console.log(str.substring(4, 10)); // "Script"

// remove space
console.log(str.trim());

// ============================================================
// ==================     LOOPS      =========================
// ============================================================

// for loop
for (let i = 0; i < 5; i++) {
  console.log("Number", i);
}

// while loop
let i = 0;
while (i < 5) {
  console.log("number", i);
  i++;
}

// do while loop
let j = 0;
do {
  console.log("Do While:", j);
  j++;
} while (j < 5);
// Output: 0 1 2 3 4

// ============================================================
// ==================     CONDITIONAL     =====================
// ============================================================

// if Statement

let age = 20;

if (age >= 18) {
  console.log("You are an adult");
}

// if...else

let age1 = 18;
if (age1 >= 18) {
  console.log("you are an adult");
} else {
  console.log("you are not an adult");
}

// if...else if...else

let marks = 75;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Switch Statement

let color = "red";

switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "yellow":
    console.log("Get ready...");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Invalid color");
}
