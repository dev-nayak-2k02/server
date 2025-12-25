// let checkPalindrome = str =>{
//     let rev = [...str]
//     let newStr = ''
//     for(let i=rev.length-1; i>=0; i--){
//         newStr += rev[i]
//     }
//     if(newStr == str) {
//         return true;
//     }
//     return false;
// }
// let ans = checkPalindrome('ele')
// console.log(ans)

// let checkPerfectSquare = (n)=> {
//     let ctr = 0;
//     if(n == 0) return false
//     for(let i = 1; i<n; i++){
//         if(i*i == n) {
//             ctr += 1
//         }
//     }
//     if(ctr == 1) {
//         return true
//     } else {
//         return false
//     }
// }
// let result = checkPerfectSquare(4)
// console.log(result)