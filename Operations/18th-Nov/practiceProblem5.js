//remove duplicates from an array
// let arr = [1,2,2,3,4,3,5,6,7,8,8];
// let newArray = [...new Set(arr)].sort((a,b)=>a-b);
// console.log(newArray)


//find 2nd largest from an array
// let arr = [1,2,2,3,4,3,5,6,7,8,8];
// let newArray = [...new Set(arr)].sort((a,b)=>a-b);
// console.log(newArray.at(-2));


//sort an array in descending order
// let arr = [1,2,2,3,4,3,5,6,7,8,8];
// let newArray = [...new Set(arr)].sort((a,b)=>b-a);
// console.log(newArray);


//reverse an array without 
let arr = [1,2,3,4];
let a,b;
a=0;
b=arr.length-1;
let ctr = 0;
while(a<b){
    ctr = arr[a];
    arr[a] = arr[b];
    arr[b] = ctr;
    a++;
    b--;
}

console.log(arr);