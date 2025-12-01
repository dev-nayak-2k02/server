// checkPrime(prime,2)

// function checkPrime(fnc,a){
//     fnc(a);
// }

// function prime(a){
//     if(a<=1){
//         console.log('not-prime');
//         return 
//     }
//     let ctr = 0;
//     for(let i = 1; i<=a; i++){
//         if(a%i == 0){
//             ctr++;
//         }
//     }
//     ctr === 2? console.log('Prime') : console.log('not-Prime');
// }


// function register(fnc){
//     setTimeout(()=>{
//         console.log('regster done');
//         fnc()
//     })
// }

// function welcome(fnc){
//     setTimeout(()=>{
//         console.log('welcome done');
//         fnc()
//     })
// }

// register(()=>{
//     welcome(()=>{
//         console.log('done')
//     })
// })


// function prom(complete){
//     return new Promise((resolve, reject)=>{
//         if (complete) {
//             resolve('I am resolved');
//         } else {
//             reject('I am undone');
//         }
//     })
// }

// function onCompletion(result) {
//     console.log(result);
// }

// function onRejection(error) {
//     console.log(error);
// }

// prom(true).then(onCompletion);
// prom(false).catch(onRejection);















function register(){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log('register cleared')
            resolve();
        },2000)
    })
}


function welcome(){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log('welcome to my page!')
            resolve();
        },2000)
    })
}

async function authentication() {
    await register();
    await welcome();
}

authentication()