// function parentFuntion(fn, n){
//     setInterval(() => {
//         fn();
//     }, n);
// }
// parentFuntion(()=>{console.log('executed')}, 2000)


// function mainFunction(fn) {
//   let execute = false;
//   return function () {
//     if (!execute) {
//       execute = true;
//       fn();
//     }
//   };
// }
// let res = mainFunction(() => {
//   console.log("executed!!");
// });
// res();
// res();
// res();


function throt(fn, delay){
    let lastCall = 0;
    return function (){
        let current = Date.now();
        if(current - lastCall >= delay){
            lastCall = current;
            fn();
        }
    }
}
let newFnc = throt(()=>{
    console.log('executed')
}, 3000)
newFnc();