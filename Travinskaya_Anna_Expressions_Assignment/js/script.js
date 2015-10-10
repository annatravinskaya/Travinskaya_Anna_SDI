/** Anna Travinskaya 10/10/15 Expressions Assignment
 */

//Variables
var userAge = prompt("Enter your name: ");
var userHeight = prompt("Enter your height in cm: ");
var userWeight = prompt("Enter your weight in kg: ");

var userHeight = Number;//casted the variable as a number

// to get height in meters: height in cm needs to be divided by 100 and multiplied by itself.
var metricHeight = userHeight / 100 * userHeight; // used arithmetic operators

//to calculate Body Mass Index: weight needs to be divided by by metric height.
var userBMI = Number(userWeight) / metricHeight;//










