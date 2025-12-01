// function promiseCaller(args){
//     return new Promise((resolve, reject)=>{
//         if(args){
//             resolve('i am response');
//         } else {
//             reject('i am rejection');
//         }
//     })
// }

// promiseCaller(true).then((msg)=>console.log(msg))


function register(cb){
    setTimeout(() => {
        console.log('Welcome to register');
        cb();
    }, 2000);
}

function welcome(cb){
    setTimeout(() => {
        console.log('Welcome to Welcome');
        cb();
    }, 2000);
}

function login(cb){
    setTimeout(() => {
        console.log('Welcome to Login');
        cb();
    }, 2000);
}

function fetchData(cb){
    setTimeout(() => {
        console.log('Welcome to fetchData');
        cb();
    }, 2000);
}

function displayData(){
    setTimeout(() => {
        console.log('Welcome to displayData');
    }, 2000);
}


register(()=>{
    welcome(()=>{
        login(()=>{
            fetchData(()=>{
                displayData();
            })
        })
    })
})