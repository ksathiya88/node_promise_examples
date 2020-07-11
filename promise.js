//making a promise or promise Obj
let promiseObj = new Promise(function (resolve, reject) {
  // asynchronous call
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

promiseObj.then(
  (val) => {
    // Success
    console.log("Succeeded", val);
  },
  (val) => {
    // Failure
    console.log("Failure", val);
  }
);
console.log("event 3");
