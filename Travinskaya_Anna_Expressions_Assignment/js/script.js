/** Anna Travinskaya 10/10/15 Expressions Assignment
 */

//Variables
var userAge = prompt("Enter your age: ");
var userWeight = prompt("Enter your weight in kg: ");
var userHeight = prompt("Enter your height in cm: ");

//Casted variables as numbers
userAge = Number(userAge) > 20; // if the user is less than 20 than he or she is too young to receive an accurate discription using this calculator
userWeight = Number(userWeight);
userHeight = Number(userHeight);

//Steps to calculate BMI
// to get height in meters: height in cm needs to be divided by 100 and multiplied by itself.
var metricHeight = (userHeight / 100) * (userHeight / 100) ; // used arithmetic operators

//to calculate Body Mass Index: weight needs to be divided by by metric height.
var userBMI = (userWeight) / (metricHeight);//

console.log(userBMI);












