// let str = 'Apple';
// console.log(str.slice(2,5))

// console.log(myFunc());
// function myFunc(){
//     return 'works'
// }

// var ans = (function testing() {
//     let val = 10;
//     return {
//         set: function (num){
//             val = num;
//         },
//         get: function (){
//             return val
//         }
//     }
// })();
// console.log(ans.get())
// ans.set(12)


// let obj = new Object();
// obj = {
//     num: 13
// }
// console.log(obj)


for(let i=1; i<=4; i++){
    let star = '';
    for(let j=1; j<=i; j++){
        star += '*';
    }
    console.log(star);
}