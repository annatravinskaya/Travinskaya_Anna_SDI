/**
 * Created by annatravinskaya on 22/10/15.
 */

var lotteryType = prompt("Which lottery would you like? Florida or Powerball?");
var floridaNumbers = [];
var powerballNumbers = [];
var powerBall;


while(lotteryType === "Florida"){
    console.log("You are playing Florida lottery!");
    lotteryType++;
}

while(lotteryType === "Powerball"){
    console.log("You are playing Powerball lottery!")
    lotteryType++;
}


floridaNumbers = function randomFloridaNumbers(){
    for(floridaNumber = 0; floridaNumber < 6; floridaNumber++);
    var floridaRNumbers = (Math.floor(Math.random() * 53) + 1);
    return floridaRNumbers();
}


if(lotteryType === "Florida") {
    console.log("Your numbers for Florida lottery are : " + floridaNumbers);
}

powerballNumbers = function randomPowerballNumbers (){
    for (var powerballRNumber = 0; powerballRNumber < 5; powerballRNumber++);
    var powerballRNumbers = (Math.floor(Math.random()* 59) + 1);
    return powerballRNumbers;
}

powerBall = function powerBallgenerator (){
    for(var rPowerball = 0; rPowerball <1; rPowerball++);
    rPowerballValue = (Math.floor (Math.random()* 35)+ 1);
    return rPowerballValue;
}

if (lotteryType === "Powerball") {
    console.log("Your numbers for Powerball lottery are : " + powerballNumbers + ". Powerball number is " + powerBall + ".");
}



