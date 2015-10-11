/** Anna Travinskaya 10/10/15 Expressions Assignment
 * Body Mass Index Calculator
 */

//Variables
var userAge = prompt('Enter your age: ');
var userWeight = prompt('Enter your weight in kg: ')
var userHeight = prompt('Enter your height in cm');
var userBMI;

//Casting variables as numbers
userAge = Number(userAge) > 20; // if the user is less than 20 than he or she is too young to receive an accurate description using this calculator
userWeight = Number(userWeight);
userHeight = Number(userHeight);

//Steps to calculate BMI:
// to get height in meters: height in cm needs to be divided by 100 and multiplied by itself.
var metricHeight = (userHeight / 100) * (userHeight / 100) ; // used arithmetic operators
//to calculate Body Mass Index: weight needs to be divided by by metric height.
var userBMI = userWeight / metricHeight;

//Array to find out the average age of users
allAges = [];
allAges = [userAge[0], userAge[1] , userAge[2] , userAge[3] , userAge[4]];
//Average = Sum of all the numbers divided by the number of numbers
var averageAge = (userAge[0] + userAge[1] + userAge[2] + userAge[3] + userAge[4])/ 5;

//Output
console.log("Your age is " + userAge + ".");//states the age of the user
console.log ("If above it says that your age is 'false', than your are too young for the accurate interpretation of your Body Mass Index(BMI) using this calculator. "); //lets the user check whether he or she is old enough for this test
console.log("If it says that your age is 'true', than you can check your BMI interpretation below. ");//lets the user check whether he or she is old enough for this test
console.log('Your BMI is ' + userBMI + "."); // states the BMI
//Output below: Lets users compare result to standards and interpret result.
console.log("If your BMI is lower than 18.5 than you are underweight. \n If your BMI is in between 18.5 and 24.9, than you are within normal body weight. \n If your BMI is is in between 25 and 19.9, than you are overweight. \n If your BMI is more than 30, than you can be considered obese.");
console.log("The average user age is " + averageAge + "."); //shows the average age. Should only work when several people entered their ages.












