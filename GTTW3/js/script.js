/**
 *  Lee A. Lewis
 *  SDI 1510
 *  GoToTraining Week 3
 */

//alert("JavaScript works!");

// my variables - uses assignment operator
var myAddress       = "123 Elm Street";
var myFavoriteStore = "\"Publix\" Supermarket";
var milesToStore    = 6.5;
var construction    = true;

// my outputs
console.log("I live at " + myAddress + "."); // output for the string
console.log("I shop at " + myFavoriteStore + "."); // output for string with escapes
console.log("It's only " + milesToStore + " miles to the store."); // output for the number
console.log("It is " + construction + " that there is construction enroute."); // outputs for the Boolean

// confirm returns a Boolean of either true or false
construction = confirm("Is there construction?  (OK for Yes, Cancel for No)");

// comparison operators
//  == - the equality operator - only looks at the value when comparing
//  === - the strict equality or identity operator - looks at the value AND the data type
if (construction === true) {

    // code that runs if the condition is true
    var extraMiles = prompt("How many more miles is it to the store?");
    extraMiles = Number(extraMiles);

    // number conditional
    if (extraMiles >=5) {
        // code that runs if construction is true and extraMiles is greater than or equal to 5
        extraMiles = extraMiles + milesToStore;
        console.log("The total miles will be " + extraMiles + ".");

    } else if (extraMiles === 0) {

        extraMiles = Number(prompt("Please enter the extra miles:"));
        console.log("Thank you.  The new mileage is " + (extraMiles + milesToStore) + " miles.")

    } else {
        // code the runs if construction is true and extraMiles is less than 5
        console.log("We aren't adding much to the trip.");
    }

} else {

    // code that runs if the condition is false
    console.log("We can take our regular route.");
    var differentStore = prompt("Where do you want to go?");

    if (differentStore === "") {

        // if they entered nothing, ask for a store again
        differentStore = prompt("I said enter a store name!");
        console.log("Thank you.  We'll go to " + differentStore + " instead.");

    } else {

        // if they entered something
        console.log("Okay, let's go to " + differentStore + ".");

    }

}