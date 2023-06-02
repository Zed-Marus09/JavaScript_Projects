// A variable is a container for storing data

//Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let age = 23; //Integer
let firstName = "Kulas"; // String
let student = true; //Boolean

console.log('Hello! ', firstName);
console.log('You are ', age, 'years old');
console.log('Enrolled ', student);

document.getElementById('p1').innerHTML = 'Hello ' + firstName;
document.getElementById('p2').innerHTML = 'You are ' + age + ' years old';
document.getElementById('p3').innerHTML = 'Enrolled ' + student; 