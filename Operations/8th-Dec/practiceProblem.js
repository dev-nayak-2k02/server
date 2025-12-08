// let calculateFactorial = (num)=>{
//     if(num <= 0) return 0;
//     let count = 0;
//     for(let i = 1; i<=num; i++){
//         if(num%i == 0){
//             count++;
//         }
//     }
//     return count;
// }
// let ans = calculateFactorial(0)
// console.log(ans)




let summation = a =>{
    let sum = 0
    for(let i = 0; i<=a; i++){
        sum+=i;
    }
    return sum;
}
let ans = summation(4)
console.log(ans);