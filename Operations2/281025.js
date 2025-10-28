let arr = [1,2,3,4,5,6,7,8,9,10,11]
let ans = arr.reduce((accumulator, initialValue) =>{
    return accumulator += initialValue;
},1)
console.log(ans);
