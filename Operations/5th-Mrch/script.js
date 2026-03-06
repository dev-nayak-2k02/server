// let arr = [1,2,3,4,5,6]
// let newArr = arr.map(a=>{
//     return a*2;
// })
// console.log(newArr)

let arr = [1,2,3,4,5,6]
let newArr = arr.filter(a=>{
    return (a%2==0);
})
console.log(newArr)