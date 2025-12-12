// let checkStringIsPalindrome = str =>{
//     let arr = str;
//     let newStr = ''
//     for(let i=arr.length-1; i>=0; i--){
//         newStr += arr[i];
//     }
//     if(newStr == str){
//         return true
//     } else {
//         return false
//     }

// }
// let ans = checkStringIsPalindrome('pp')
// console.log(ans);

// let checkPrime = num =>{
//     let count = 0;
//     for(let i=1; i<=num; i++){
//         if(num%i == 0){
//             count++;
//         }
//     }
//     if(count == 2){
//         return true;
//     } else {
//         return false;
//     }
// }
// let result = checkPrime(11);
// console.log(result)


// let checkPerfectSquare = num => {
//     for(let i = 1; i<=num; i++){
//         if(i*i == num){
//             return true;
//         }
//     }
//     return false

// }
// let ans = checkPerfectSquare(16)
// console.log(ans)


let removeVowels = str => {
    let copy = [...str];
    let count = 0;
    for(let k of copy){
        if( k === 'A'||k ==='I'||k ==='E'||k ==='O'||k ==='U'||k ==='a'||k ==='i'||k ==='e'||k ==='o'||k ==='u'){
            copy[count] = '';
        }
        count++;
    }
    return copy;
}
let ans = removeVowels('Apple')
console.log(...ans);

