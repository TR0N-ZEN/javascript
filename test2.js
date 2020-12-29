let trigger = () => {}

const eventHandler = async function() {
  //while(true) {
    await new Promise ( (resolve) => {
      trigger = resolve
//    ^^^^^^^^^^^^^^^^^
    });
    console.log("finished");
    // Code when the promise fulfills.
  //}
}

const cleaner = function() {
  trigger(); // calls resolve to fulfill the currently waited-for promise
}

eventHandler(); // start waiting