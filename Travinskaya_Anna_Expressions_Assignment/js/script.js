/** Anna Travinskaya 10/10/15 Expressions Assignment
 */

//Variables
var userAge = prompt("Enter your name: ");
var ageLessThan20 = false; // if the user is less than 20 years old than the results would be described differently than using this calculator.
var userWeight = prompt("Enter your weight in kg: ");
var userHeight = prompt("Enter your height in cm: ");

//Casted variables as numbers
userAge = Number;
userWeight = Number;
userHeight = Number;

//Steps to calculate BMI
// to get height in meters: height in cm needs to be divided by 100 and multiplied by itself.
var metricHeight = userHeight / 100 * userHeight; // used arithmetic operators

//to calculate Body Mass Index: weight needs to be divided by by metric height.
var userBMI = Number(userWeight) / metricHeight;//







