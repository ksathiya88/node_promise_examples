//Promise Chain
new Promise(function (resolve, reject1) {
  setTimeout(function () {
    //resolve1("Success");
    console.log("Success111");
    resolve("Success");
  }, 1000);
})
  .then(() => {
    return new Promise(
      function (resolve, reject) {
        console.log("Success22212");
        resolve("Succ111");
      },
      () => {
        console.log("error");
      }
    );
  })
  .then(
    () => {
      return new Promise(function (resolve, reject) {
        console.log("Succes3333");
        resolve("Succ222");
      });
    },
    () => {
      console.log("error");
    }
  );
