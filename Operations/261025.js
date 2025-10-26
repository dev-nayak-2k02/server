// console.log([] == ![]);


// function register(callBack){
//     setTimeout(()=>{
//         console.log('register page');
//         callBack();
//     },1000);
// }

// function welcome (cb){
//     setTimeout(()=>{
//         console.log('Welcome! aboard');
//         cb();
//     },1000);
// }

// function login(dr){
//     setTimeout(()=>{
//         console.log('Login Page');
//         dr();
//     },1000);
// }


// function fetchData(fn){
//     setTimeout(()=>{
//         console.log('Data is fetched');
//         fn();
//     },1000);
// }

// function displayData(){
//     setTimeout(()=>{
//         console.log('Data is being displayed');
//     },1000);
// }

// register(()=>{
//     welcome(()=>{
//         login(()=>{
//             fetchData(()=>{
//                 displayData()
//             })
//         })
//     })
// });



let result = false;
let prom = new Promise((resolve, reject) => {
    if (result) {
        resolve();
    } else {
        reject();
    }
})
console.log(prom);


