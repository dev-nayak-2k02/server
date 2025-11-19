let complete = false;
let prom = new Promise((resolve, reject) => {
  if (complete) {
    resolve("resolved");
  } else {
    reject("fail");
  }
});
console.log(prom);




function prom(complete){
    return new Promise((resolve, reject) => {
        if(complete){
            resolve('Resolved');
        } else {
            reject('Rejected')
        }
    })
}