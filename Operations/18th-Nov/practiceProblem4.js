let arr = [1,2,3,4,5];
let ans = arr.reduce((acc, val)=>{
    return acc+val;
},0)
console.log(ans);