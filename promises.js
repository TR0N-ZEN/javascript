var promise = new Promise(function(resolve, reject) {/*...*/});

function p1_worked() {
    console.log('p1 terminated without error');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
}
function p1_on_error() {
    console.log('p1 terminated with an error');
}
function p2_worked() {
    console.log('p2 terminated without error');
}
function p2_on_error() {
    console.log('p2 terminated with an error');
}

var promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve();
    }, 3000);
});
var promise2 = promise1.then(p1_worked, p1_on_error).then(p2_worked, p2_on_error);
console.log('synchronous action');

/*
async function asyncFunction() {
    setTimeout(() => {

    });
}

/*
const promise = asyncFunction(arg_1);
promise.then(successCallback, failureCallback);
*/


