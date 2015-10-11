/** Anna Travinskaya 10/10/15 Expressions Assignment
 */

//Variables
var userAge = [];
var userWeight = [];
var userHeight = [];

//Array
//Information from user 1
userAge[0] = prompt("Enter your age: ");
userWeight[0]= prompt("Enter your weight in kg: ");
userHeight[0]= prompt("Enter your height in cm: ");

//Information from user 2
userAge[1] = prompt("1.Enter your age: ");
userWeight[1]= prompt("1.Enter your weight in kg: ");
userHeight[1]= prompt("1.Enter your height in cm: ");

//Information from user 3
userAge[2] = prompt("2.Enter your age: ");
userWeight[2]= prompt("2.Enter your weight in kg: ");
userHeight[2]= prompt("2.Enter your height in cm: ");

//Information from user 4
userAge[3] = prompt("3.Enter your age: ");
userWeight[3]= prompt("3.Enter your weight in kg: ");
userHeight[3]= prompt("3.Enter your height in cm: ");

//Information from user 5
userAge[4] = prompt("4.Enter your age: ");
userWeight[4]= prompt("4.Enter your weight in kg: ");
userHeight[4]= prompt("4.Enter your height in cm: ");

//Casted variables as numbers
userAge = Number(userAge) > 20; // if the user is less than 20 than he or she is too young to receive an accurate description using this calculator
userWeight = Number(userWeight);
userHeight = Number(userHeight);

//Steps to calculate BMI
// to get height in meters: height in cm needs to be divided by 100 and multiplied by itself.
var metricHeight = (userHeight / 100) * (userHeight / 100) ; // used arithmetic operators

//to calculate Body Mass Index: weight needs to be divided by by metric height.
var userBMI = userWeight / metricHeight;

var averageAge = userAge[0] + userAge[1] + userAge[2] + userAge[3] + userAge[4];
var averageWeight = userWeight[0] + userWeight[1] + userWeight[2] + userWeight[3] + userWeight[4];
var averageHeight = userHeight[0] + userHeight[1] + userHeight[2] + userHeight[3] + userHeight[4];


//Output
console.log("Your age is " + userAge + ".");//states the age of the user
console.log ("If above it says that your age is 'false', than your are too young for the accurate interpretation of your Body Mass Index(BMI) using this calculator. "); //lets the user check whether he or she is old enough for this test
console.log("If it says that your age is 'true', than you can check your BMI interpretation below. ");//lets the user check whether he or she is old enough for this test
console.log("If it says that your age is 'true', than you can check your BMI interpretation below. ");//lets the user check whether he or she is old enough for this test
console.log("If it says that your age is 'true', than you can check your BMI interpretation below. ");//lets the user check whether he or she is old enough for this test
console.log('Your BMI is ' + userBMI + "."); // states the BMI
console.log("If your BMI is lower than 18.5 than you are underweight."); // lets user compare result to underweight category
console.log ("If your BMI is in between 18.5 and 24.9, than you are within normal body weight."); // lets user compare result to the normal category
console.log ("If your BMI is is in between 25 and 19.9, than you are overweight."); //lets user compare result to overweight category
console.log("If your BMI is more than 30, than you can be considered obese.");//lets user compare result to the obese category












