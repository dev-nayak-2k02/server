function mainFnc(cb) {
  let execute = false;
  return ()=>{
    if(!execute){
        execute = true;
        cb();
    }
  }
}
let ans = mainFnc(() => {
  console.log("executed");
});
