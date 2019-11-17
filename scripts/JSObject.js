//Create an object creation function


var Home = function (type, bedrooms, address, price) {
    this.type = type;
    this.bedrooms = bedrooms;
    this.address = address;
    this.price = price;
}

//Create objects that inherit the same properties
var myHome = new Home("apartment", "2", "19021 S MadeUp Ave", "1000")
var friendHome = new Home("house", "4", "99616 N Rainbow Rd", "4000")


//Write a sentence to display this.
document.write("My home is an " + myHome.type + " with " + myHome.bedrooms + " bedrooms. You can get to my house by going to this address: " + myHome.address + " My monthly rent is " + myHome.price + "<br>");

document.write("My friend's home is a " + myHome.type + " with " + myHome.bedrooms + " bedrooms. You can get to my friend's house by going to this address: " + myHome.address + " His monthly rent is " + myHome.price);