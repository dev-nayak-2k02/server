let array = [11, 12, 13, 14, 15, 16];
let ans = array.reduce((acc, val)=>{
    return acc + val;
},0)
console.log(ans)