// const a = [1,2,3,4,5];
// const b = [9,8,5,3,2];
// let conCurrent = new Set([...a].filter((value)=>{
//     b.has(value)
// }))
// console.log(conCurrent);

//second largest
let arr = [1,2,3,4,5];
let arri = [...new Set(arr)];
let res = arri.sort((a, b)=> b-a);
console.log(res[1]);