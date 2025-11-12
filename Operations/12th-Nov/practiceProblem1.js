//sort the array and print second largest number
let arr = [1,2,3,2,4,5,1,6];
let arri = [...new Set(arr)]
let newArray = arri.sort((a,b)=> a-b)
console.log(newArray.at(-2))