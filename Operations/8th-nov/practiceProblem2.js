function throttle(cb, delay) {
  let lastCall = 0;
  return function () {
    let current = Date.now();
    if (current - lastCall >= delay) {
      lastCall = current;
      cb();
    }
  };
}

let newFnc = throttle(() => {
  let num = Math.random();
  console.log(num);
}, 2000);


newFnc()