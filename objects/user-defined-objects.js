// create new user-defined object by assigning it to a variable

var car = new Object(); // "Object()" is the type of object you are creating, "car" is the name of the object
car.make = "Honda";
car.model = "CRV"; // This is how you assign Properties to the Object "car"
//call property of "car" object by simpling including car.make or car.model to code

// Another way of creating an object is this:

var motorcycle = { //Also known as an associative array
    make: "Honda",
    model: "CMX"
}

//How to Build an Object Constructor:

function Person(name, eyeColor, age) { // We are basically creating an "Object type"
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
    this.addHeight = addHeight; // A method made on line 28
}
// Creating a function used inside of an object makes it a method
function addHeight(tall) {
    this.height = tall;
}
// And then, create the Person Object:
let person01 = new Person("Brenden", "Blue", 25);
let person02 = new Person("Amy", "Green", 21);

// You would add someone's height to a previously created object like this:
person01.addHeight("5'11");

// Output the results
document.write(person01.name + "'s eyes are " + person01.eyeColor + ", he/she is " + person01.age + " years old and he/she is " + person01.height);