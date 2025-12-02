// let complete = function(arg){
//     return new Promise((resolve, reject) => {
//         if(arg){
//             resolve('I am fullfilled');
//         } else {
//             reject('I am rejected');
//         }
//     })
// }

// function onFulFillment(res){
//     console.log(res)
// }

// function onRejection(err) {
//     console.log(err);
// }

// complete(true).then(onFulFillment);
// complete(false).catch(onRejection);


function register(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Register Page');
            resolve();
        }, 2000);
    })
}
function welcome(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('welcome Page');
            resolve();
        }, 2000);
    })
}
function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('login Page');
            resolve();
        }, 2000);
    })
}
async function execute() {
    await register();
    await welcome();
    await login();
}
execute()