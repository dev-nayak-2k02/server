// const a = [1,2,3,4,5];
// const b = [9,8,5,3,2];
// let conCurrent = new Set([...a].filter((value)=>{
//     b.has(value)
// }))
// console.log(conCurrent);

//second largest
// let arr = [1,2,3,4,5];
// let arri = [...new Set(arr)];
// let res = arri.sort((a, b)=> b-a);
// console.log(res[1]);


//most frequrntly occured element
let arr = [1,2,3,3,2,4,8,3];
let obj = new Object();
arr.forEach((val)=>{
    obj[val] === undefined ? (obj[val] = 1) : (obj[val]++)
})
let ctr = 0;
for(let data in obj){
    if(ctr<obj[data]){
        ctr = obj[data];
    }
}

console.log(`number with highest occurence frequency is ${ctr}`);