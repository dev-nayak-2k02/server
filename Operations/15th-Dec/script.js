// let calculateFactorial = num => {
//     let count = 0;
//     for(let i = 1; i<=num; i++){
//         if(num%i == 0){
//             count++;
//         }
//     }
//     return count
// }
// let result = calculateFactorial(12)
// console.log(result)

let functionRedeemer = (fn, delay) => {
    let call = 0;
    return function () {
        let current = Date.now();
        if(current - call >= delay){
            call = current;
            fn();
        }
    }

}
let answer = functionRedeemer(()=>{
    console.log('I am executing');
}, 2000/*in ms*/);
answer()