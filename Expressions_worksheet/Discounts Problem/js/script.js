/** Anna Travinskaya 8.10.15 Expressions Worksheet */

//Discounts Problem

//Variables
var originalPrice = 80;
var discountPercentage = 15;
var itemDescription = "pullover";
var salesTaxPercentage = 1.5;

// Original price times the  discount percentage and divided by 100 = discount amount
//Original price - discount amount = price without tax
// Price with tax = price without tax plus the tax percentage
var priceWithoutTax = originalPrice - (originalPrice * discountPercentage / 100);
var priceWithTax =  priceWithoutTax + (priceWithoutTax * salesTaxPercentage / 100);


//Print th output the describes different prices for a pullover
console.log("Your " + itemDescription + " was originally $" + originalPrice + ", but after a " + discountPercentage + "% discount, it is now $" + priceWithoutTax + " without tax, and $" + priceWithTax + " with tax.");
