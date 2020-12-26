var object1 = {
    property1: "heavy",
    property2: "hard",
    method1: function () {
        return "method1 of object1";
    }
}
//console.log(object1.method1());

class class1 {
    constructor(arg_property1, arg_property2) {
        this.property1 = arg_property1;
        this.property2 = arg_property2;
        //console.log(this);
    }
    method1() {return "method1 of object from class1";}
}
var object1_of_class1 = new class1("light", "soft");


//to add properties and methods to a class and to all objects of a class you must modify the object constructor inside the class. The following code shows how:
class1.prototype.property3 = "invisible";
class1.prototype.method2 = () => {return "method2 of object from class1"}