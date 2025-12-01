new Promise((resolve, reject) => {
  if (true) {
    resolve("I m fulfilled");
  } else {
    reject("i m rejected");
  }
}).then(function(res) {
  console.log(res);
});

// prom(true).then(function(res){
//     console.log(res);
// });
// prom(false).catch(function (error) {
//   console.log(error);
// });
