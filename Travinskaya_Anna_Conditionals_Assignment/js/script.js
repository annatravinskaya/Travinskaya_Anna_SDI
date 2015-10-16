/** Anna Travinskaya
 * 16/10/15.
 * Conditionals Assignment
 */


//Variables
var nameOfTheComputer            = prompt("Enter the name of the Computer you would like to buy: ");
var computerScreenSize           = Number(prompt("Enter computer's screen size in inches: "));
var computerMemory               = Number(prompt("Enter computer's internal storage in GB"));
var originalPriceOfTheComputer   = Number(prompt("Enter the original price of the computer"));
var discountPercentage           = Number(prompt ("Enter discount percentage for the computer:"));

//Calculations to find out the cost of the computer with the discount
var discountedAmount             = (originalPriceOfTheComputer * discountPercentage)/100;
var newComputerPrice             = originalPriceOfTheComputer - discountedAmount;


//Outputs
console.log("You would like to buy an " + nameOfTheComputer + ".");

//Validation whether the user has entered the name
if(nameOfTheComputer = ""){
    prompt("Please, enter the name of the computer you would like to buy: ");
}


//Output for computer specifications
console.log("It has a " + computerScreenSize + " inch display and " + computerMemory + " GB memory.");

//Validation whether the user has entered the specifications
if (computerScreenSize = ""){
    prompt("Please, enter computer's screen size in inches: ");
}

if(computerMemory = ""){
    prompt("Please, enter computer's screen size in inches: ");
}

//Validation if the user has entered information about the price
if(originalPriceOfTheComputer = ""){
    prompt("Please, enter the original price of the computer: ");
}
if(discountPercentage = ""){
    prompt("Please, enter discount percentage for the computer: ");
}



//Outputs using conditionals
if(newComputerPrice < 1700 && computerScreenSize > 13){
    //includes logic operator &&
    console.log("$ " + newComputerPrice + " is a good price for it !");

}else if(newComputerPrice < 1700 || computerMemory > 8){
    //includes logic opertor ||
    console.log("$ " + newComputerPrice + " is a good price for it !");
}else{
    console.log(" Buying" + nameOfTheComputer + "for" + newComputerPrice + "is not a good investment. ");
}

//Ternary Conditional
result = (newComputerPrice < 1700) ? "Congratulations, for finding " + nameOfTheComputer + "at a great price!" : "Sorry, you should look at discounts for " + nameOfTheComputer + "somewhere else.";
console.log(result);