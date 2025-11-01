// let a = 7;
// let fact = 0;
// for(let i = 1; i <= a; i++){
//     if(a%i == 0){
//         fact++;
//     }
// }
// console.log(fact);



// let n = 22;
// let count = 0;
// while(n!=0) {
//     count++;
//     n = parseInt(n/10);
// }
// console.log(count);


// function higherOrderFunction(fnc, time, clr){
//     setInterval(fnc, time)
//     setTimeout(() => {
//         clearInterval()
//     }, clr);
// }

// higherOrderFunction(function callback(){
//     console.log('Hello, world!');
// }, 2000, 6000)


function greetKaro(param1){
    return function (param2){
        console.log(`${param1} ${param2}`)
    }
}

let greetingFnc = greetKaro('hello');
greetingFnc('harsh')