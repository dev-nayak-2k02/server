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




// let summation = a =>{
//     let sum = 0
//     for(let i = 0; i<=a; i++){
//         sum+=i;
//     }
//     return sum;
// }
// let ans = summation(4)
// console.log(ans);


// let checkStringLength = function(str){
//     let count = 0;
//     for(let k of str){
//         count++;
//     }
//     return count;
// }
// let result = checkStringLength('Apple');
// console.log(result)


// let checkVowels = str => {
//     let count = 0;
//     for(let k of str){
//         if( k === 'A'||k ==='I'||k ==='E'||k ==='O'||k ==='U'||k ==='a'||k ==='i'||k ==='e'||k ==='o'||k ==='u'){
//             count++;
//         }
//     }
//     return count;
// }
// let ans = checkVowels('Apple')
// console.log(ans);



// let removeVowels = str => {
//     let copy = [...str];
//     let count = 0;
//     for(let k of copy){
//         if( k === 'A'||k ==='I'||k ==='E'||k ==='O'||k ==='U'||k ==='a'||k ==='i'||k ==='e'||k ==='o'||k ==='u'){
//             copy[count] = '';
//         }
//         count++;
//     }
//     return copy;
// }
// let ans = removeVowels('Apple')
// console.log(...ans);



