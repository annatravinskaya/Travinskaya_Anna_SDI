//Conditional Logic - else if

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; // the height of the kid with the parent

if(kidHeight > minHeight){
    //you can ride
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present.");
}else{
    //sorry you have growing to do
    console.log("Sorry kid, you've got some growing to do first!");
}