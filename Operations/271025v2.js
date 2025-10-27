function register(arg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arg) {
        resolve("resolved");
      } else {
        reject("rejected");
      }
    }, 1000);
  });
}

function welcome(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cb) {
        resolve("resolved");
      } else {
        reject("rejected");
      }
    }, 1000);
  });
}

register(true)
  .then((res) => {console.log(res); return welcome(true);})
  .then((res) => console.log(res));
