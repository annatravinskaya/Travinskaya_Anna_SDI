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