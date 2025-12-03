let arr = [10,20,10,20,30,40,50,30,30,30];
let obj = {};
arr.forEach((item)=>{
    obj[item] === undefined ? obj[item] = 1 : obj[item]++;
})
let count = 0;
let k = '';
for(let i in obj){
    if(obj[i] > count){
        count = obj[i];
        k = i;
    }
}
console.log(k)