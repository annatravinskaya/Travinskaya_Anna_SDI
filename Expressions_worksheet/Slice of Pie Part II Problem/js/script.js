/** Anna Travinskaya 8.10.15 Expressions Worksheet */

// Problem: Slice of Pie Part II

//Calculate how many leftover pizzas the dog Sparky will get
//Variables
var slicesPerPizza = 7;
var numberOfPeople = 16;
var pizzasOrdered = 5;

var slicesForSparky = slicesPerPizza * pizzasOrdered % numberOfPeople; //result variable

//Print out the output showing the remainder of pizzas that are left for dog
console.log(slicesForSparky);
