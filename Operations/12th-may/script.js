// let a = Number(prompt("enter a number: "));
// let perfectLoop = (a) => {
//   let mod,
//     n,
//     sum = 0,
//     i;
//   for (i = 1; i < a; i++) {
//     mod = a % i;
//     if (mod == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };
// let perfectResult = (res) => {
//   if (a === res) {
//     console.log("its a perfect mnumber");
//   } else {
//     console.log("its not a perfectnumber");
//   }
// };
// function checkPerfect(a) {
//   let n = a;
//   let res = perfectLoop(a);
//   perfectResult(res);
// }
// checkPerfect(a);


// let checkEvenOdd = (a)=>{
//     if(a===0||a<0||a!=Number(a)){
//         return "data is not according to parameters";
//     }
//     if(a%2 === 0){
//         return "Number is Even";
//     } else {
//         return "Number is Odd";
//     }
// }
// let num = Number(prompt("Enter a number:"));
// let res = console.log(checkEvenOdd(num));

// let a = Number(prompt("Enter a four digit number:  "));
// let arrayMaker = (a)=>{
//     let arr = [];
//     let mod;
//     while (a>0) {
//         mod = a%10;
//         arr.push(mod);
//         a = Math.floor(a/10);
//     }
//     return arr.reverse();
// }
// let newArr = arrayMaker(a);
// let i = 0;
// while (i < newArr.length) {
//     if (newArr[i]>newArr[i+1]) {
//         console.log(`${newArr[i]} is greater`);
//     } else {
//         console.log(`${newArr[i+1]} is greater`);
//     }
//     i+=2;
// }


let arr = new Array(10);
for(let i = 0; i<10; i++){
    arr[i] = Number(prompt('enter a number: '));
}
console.log([...arr]);

