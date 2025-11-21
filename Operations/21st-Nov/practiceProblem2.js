function mainFnc(cb) {
  let execute = false;
  if (!execute) {
    return () => {
      execute = true;
      cb();
    };
  }
}
let ans = mainFnc(() => {
  console.log("executed");
});
