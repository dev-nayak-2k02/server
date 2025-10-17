// let ari = 'apple';
// console.log(ari.split('p'));


// let trs = 'apple';
// console.log(trs.replaceAll('p','i'));


// let der = 'DevPrasanna';
// console.log(der.indexOf('P'));

// let str = 'Irokuni';
// console.log(str.includes('f'));

// let ans = (function(){
//     let a;
//     return {
//         set: function(val){
//             a = val;
//         },
//         get: function(){
//             console.log(a);
//         }
//     }
// })();
// ans.set(10)
// ans.get()

// for(let i = 1; i<=4; i++){
//     let star="";
//     for(let j = 1; j<=i; j++){
//         star+='*';
//     }
//     console.log(star);
// }

let str = 'javaScript';
for(let eng of str){
    console.log(eng + eng);
}

const mySet = new Set();
const anotherSet = new Set([1,2])