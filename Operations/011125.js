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

// function greetKaro(param1){
//     return function (param2){
//         console.log(`${param1} ${param2}`)
//     }
// }

// let greetingFnc = greetKaro('hello');
// greetingFnc('harsh')

// greetingFnc = greetKaro('Namaste,')
// greetingFnc('subham')

// function hof(fn) {
//   let executed = false;
//   return function () {
//     if (!executed) {
//       executed = true;
//       fn();
//     }
//   };
// }

// let ans = hof(function abcd() {
//   console.log("hello there");
// });
// ans();
// ans()
// ans()

function throtell(fnc, delay) {
  let lastCall = 0;
  return function () {
    let currentCall = Date.now();
    if (currentCall - lastCall >= delay) {
      lastCall = currentCall;
      fnc();
    }
  };
}

let res = throtell(function () {
  console.log("WIll BE RIGHT BACK IN 2mins!!");
}, 2000);

res()