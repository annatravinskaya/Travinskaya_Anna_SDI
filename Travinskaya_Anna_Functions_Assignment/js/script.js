/* Anna Travinskaya
* Scalable Data Infrastructures 1510
* Functions Assignment
 */

//Declared variables
var lotteryType = prompt("Which lottery would you like? Florida or Powerball?");
var floridaNumbers = [];
var powerballNumbers = [];
var powerBall;

//validated user prompts with while loop
while(lotteryType === "Florida"){
    console.log("You are playing Florida lottery!");
    lotteryType++;
}

while(lotteryType === "Powerball"){
    console.log("You are playing Powerball lottery!")
    lotteryType++;