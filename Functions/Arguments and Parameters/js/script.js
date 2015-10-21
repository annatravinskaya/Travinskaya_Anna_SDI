//Functions - Arguments and Parameters

calcArea(30, 20);
function calcArea(w, h){ // w =30, h=20
    var area = w * h;
    console.log(area);
}


function dogYears(age){ //holds a parameter - storage container for arguments
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.")
}
//these hold arguments
var age1 = 4;
dogYears(age1);
dogYears(6);
dogYears(7); //we passing the value 7 to age