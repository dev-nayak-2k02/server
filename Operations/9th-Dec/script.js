// let checkPrime = (a)=>{
//     if(a == 2) return 'true';
//     if(a <= 1) return 'false';
//     let count = 0;
//     for(let i = 1; i<=a; i++){
//         if(a%i == 0){
//             count++;
//         }
//     }
//     if(count === 2){
//         return 'true';
//     } else {
//         return 'false';
//     }
// }
// let ans = checkPrime(7);
// console.log(ans);


let checkPerfectSquare = a =>{
    if(a <= 0) return false;
    for (let index = 1; index < a; index++) {
        if(index*index == a){
            return true;
        }
    }
    return false;
}
let answer = checkPerfectSquare(5);
console.log(answer);