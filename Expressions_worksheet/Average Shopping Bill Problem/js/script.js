/** Anna Travinskaya 8.10.15 Expressions Worksheet */

//Average Shopping Bill Problem

// Array Variable
var weeklyGroceryTotal = [91,101,105,98,101];


//Sum of all numbers = total amount of money spent on groceries
var totalAmount = weeklyGroceryTotal[0] + weeklyGroceryTotal[1] + weeklyGroceryTotal[2] + weeklyGroceryTotal[3] + weeklyGroceryTotal[4];

//Average = Sum of all numbers divided by the amount of numbers there are.
var averageWeeklySpending = totalAmount / 5;

//Print out the output describing the results
console.log("You have spent a total of $" + totalAmount + " on groceries over 5 weeks. That is an average of $" + averageWeeklySpending + " per week.");