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

while(lotteryType === "Powerball") {
    console.log("You are playing Powerball lottery!")
    lotteryType++;
}

//Created a function for the Florida Lottery
floridaNumbers = function randomFloridaNumbers(){
    for(floridaNumber = 0; floridaNumber < 6; floridaNumber++);
    var floridaRNumbers = (Math.floor(Math.random() * 53) + 1);
    return floridaRNumbers();
    }

//connected prompt to function via conditional statement
if(lotteryType === "Florida") {
    console.log("Your numbers for Florida lottery are : " + floridaNumbers);
}