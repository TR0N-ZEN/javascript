function function1 () {
    return "I am function1";
}
console.log(function1);
console.log(
	function () {return "I am an anonymous function";}
); //anonymous function <=> function without a name
console.log(
	() => {return "I am an arrow function";}
); // arrow function function is always an anonymous function but without the keyword funtion but an arrow

function function2 (f)
{ //function2 is considered a function of higher order
	console.log(f() + " passed to and called in function2");
}

function2(function1);