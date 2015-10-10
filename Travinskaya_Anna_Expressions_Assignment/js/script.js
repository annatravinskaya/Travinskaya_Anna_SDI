/** Anna Travinskaya 10/10/15 Expressions Assignment
 */

//Variables
var userAge = prompt("Enter your age: ");
var userWeight = prompt("Enter your weight in kg: ");
var userHeight = prompt("Enter your height in cm: ");

//Casted variables as numbers
userAge = Number(userAge) > 20; // if the user is less than 20 than he or she is too young to receive an accurate description using this calculator
userWeight = Number(userWeight);
userHeight = Number(userHeight);

//Steps to calculate BMI
// to get height in meters: height in cm needs to be divided by 100 and multiplied by itself.
var metricHeight = (userHeight / 100) * (userHeight / 100) ; // used arithmetic operators

//to calculate Body Mass Index: weight needs to be divided by by metric height.
var userBMI = userWeight / metricHeight;

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












