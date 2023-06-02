// Type Conversion = change the datatype of a value to another
// (String, number, booleans)

let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
age += 1;
console.log("Happy Birthday your are now ", age, " years old");
console.log(typeof age);