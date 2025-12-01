function prom(complete) {
  return new Promise((resolve, reject) => {
    if (complete) {
      resolve("I am fulfilled");
    } else {
      reject("i am rejected");
    }
  });
}
const onFulfillment = (result)=>{
    console.log(result);
}
const onRejection = (error) =>{
    console.log(error);
}
prom(true).then(onFulfillment);
prom(false).catch(onRejection);