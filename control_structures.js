//loops
var i = 0;

for (i = 0; i < 5; i++) {
    //console.log(i);
}

array1 = [6, 1, 4, 3, 5];
for (val of array1) {
    //console.log(val);
}

object1 = {
    property1: "heavy",
    property2: "hard"
}
for (property in object1) {
    //console.log(property);
}

do {
    //console.log(i);
    i++;
}
while (i < 5);

i = 0;
while(i < 5) {
    //console.log(i);
    i++;
}

for (let x = 0; x < 100; x++) {
    if (x == 50) {
        continue;//breaks current iteration of the enclosing loop and jumps to the next iterational step
    }
    //console.log(x);
}
for (let x = 0; x < 100; x++) {
    if (x == 50) {
        break;//breaks the enclosing loop
    }
    //console.log(x);
}

//if else
var b1 = true;
var b2 = false;
if (b1 && b2) {
    //console.log("b1 and b2 are true");
} else if (b1) {
    //console.log("b1 is true and b2 is false");
} else if (b2) {
    //console.log("b2 is true and b1 is false");
} else {
    //console.log("b1 and b2 are false");
}

//switch
z = 0;
switch(z) {
    case(0):
        //console.log("z is 0");
        break;
    case(1):
        //console.log("z is 1");
        break;
    case(2):
        //console.log("z is 2");
        break;
    default:
        //console.log("you entered an invalid number");

}

//try catch finally
try {
    //tryCode - Block of code to try
  }
  catch(err) {
    //catchCode - Block of code to handle errors
  }
  finally {
    //finallyCode - Block of code to be executed regardless of the try / catch result
  }