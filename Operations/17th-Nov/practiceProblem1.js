//slice
// let str = 'Hello there';
// console.log(str.slice(2,5));


//split
// let str = 'Hello there we re back';
// console.log(str.split('e'));


//replace
// let str = 'hello';
// console.log(str.replace('o','aw'));

//repalceAll
// let str = 'hellaw';
// console.log(str.replaceAll('l','k'));


//indexOf
// let str = 'UltraBee';
// console.log(str.indexOf('a'));

//includes
// let str = 'twinPagelumFermentiKenteNari';
// console.log(str.includes('a'));


// let abcd = function(a,b,c){
//     console.log(a,b,c)
// }
// abcd(11,12,14);


//forEach
// let arr = [10,11,12,13];
// arr.forEach(item=>console.log(item))


//for..in
// let obj = {
//     Name:'Dev',
//     Degree:'BCA',
//     Age:'22'
// }
// for(let k in obj){
//     console.log(`${k}:${obj[k]}`);
// }


//for..of
// let str = 'string';
// for(let ch of str){
//     console.log(ch+ch);
// }


//iife(Imediately Invoked Function Expression)
//example1
// let arr = (function(){
//     return 'IIFE';
// })()
// console.log(arr)
//----------------------------------------------------------------------------------------------------------
//expample2
// let res = (function abcd(){
//     let a = 12;
//     return {
//         set: function(val){
//             a = val;
//         },
//         get: function(){
//             console.log(a);
//         }
//     }
// })();

// res.get()
// res.set(11);
// res.get()


//HOFS(Higher Order Function Expression)
// let primeCheck = function(fn, val) {
//     return fn(val);  
// }
// function prime(num) {
//     if (num <= 1) return 'Not Prime';
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             count++;
//         }
//     }

//     if (count === 2) {
//         return 'Prime Number';
//     } else {
//         return 'Not-prime Number';
//     }
// }
// let ans = primeCheck(prime, 11);
// let res = ans
// console.log(res)


