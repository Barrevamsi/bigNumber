let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = parseInt(prompt("Enter the third number:"));

let greatest;

if (num1 >= num2 && num1 >= num3) {
  greatest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  greatest = num2;
} else {
  greatest = num3;
}

console.log(`The greatest number is ${greatest}`);
