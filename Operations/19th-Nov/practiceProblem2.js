let complete = false;
let prom = new Promise((resolve, reject) => { if(complete){console.log('resolved')} else {console.log('fail')} })
console.log(prom);