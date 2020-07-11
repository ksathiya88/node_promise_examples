let promise_Obj = new Promise((resolve, reject) => {
  resolve("Success");
});
promise_Obj.then(
  (val) => {
    console.log("Successs111", val);
  },
  (val) => {
    console.log("Failure111", val);
  }
);
console.log("log 2");
for (i = 1; i < 10; i++) {
  console.log(i);
}
