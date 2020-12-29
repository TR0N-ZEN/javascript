/*
function a(y) {
    console.log(y);
    if (y < 20) {
        a(++y);
    }
}

function b() {
    var x = 0;
    a(x);
}

b();
*/

function d() {
    return new Promise(resolve => {
        setTimeout(() => {resolve("resolved");}, 1000);
    });
}

list = [0];

async function c(x) {
    console.log(x);
    let y = await d();
    console.log(y);
    if (x < 20) {
        list[++x] = await c(x);
    }
    //if x == 20 this will be happening for the first time
    return x;
}


c(0);