/**
 * Anna Travinskaya
 * SDI 1510
 * Week 2 GoToTraining
 */

//variables

var myFirstName;
var myLastName;
var myAge;
var newAge;

//prompts - allow me to assign user data to the variables
//always return string data
myFirstName = prompt('Enter you first name: ');
myLastName = prompt('Enter your last name: ');
myAge = prompt('Enter you age: ') //this still returns string data
myAge = Number(myAge); // this method casts/converts my string to a number
newAge = myAge + 2;
//outputs

console.log('Hello, ' + myFirstName + ' ' +  myLastName + '.');
console.log('You will be ' + newAge + ' in two years.');
console.log("Wow, you'll be " + newAge + "! That's old!");

//Order of operations
//PEMDAS
//Parenthesis Exponents Multiplication Division Addition Subtraction



