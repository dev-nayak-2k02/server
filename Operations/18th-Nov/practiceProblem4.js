// let arr = [1,2,3,4,5];
// let ans = arr.reduce((acc, val)=>{
//     return acc+val;
// },0)
// console.log(ans);

// let a;
// let b = null;
// let c = a+b;
// console.log(a)
// console.log(b)
// console.log(c)


for(let i = 1; i<=5; i++){
    let star = '';
    for(let j = 1; j<=i; j++){
        star += '*';
    }
    console.log(star);
}