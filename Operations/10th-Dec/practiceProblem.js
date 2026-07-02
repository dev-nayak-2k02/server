// let checkPerfecttSquare = num =>{
//     let ctr = Math.floor(Math.sqrt(num))
//     if(ctr*ctr === num){
//         return true
//     }
//     return false
// }
// let result = checkPerfecttSquare(56);
// console.log(result);





// let checkStringIsPalindrome = (str) => {
//   let copyString = [...str].reverse().sort((a, b) => {
//     return b - a;
//   });
//   let ltr = ''
//   for (let k of copyString) {
//     ltr += k
//   }
//   if(ltr === str){
//     return true
//   } else {
//     return false
//   }
// };
// let answer = checkStringIsPalindrome("NOW");
// console.log(answer);





// let executeOnce = (fn) =>{
//     let executed = false;
//     return function (){
//         if(!executed){
//             executed = true;
//             fn();
//         }
//     }
// }
// let answer = executeOnce(()=>{
//     console.log('I got executed once')
// })





// let arr = [1,2,3];
// console.log(arr=[]);


// const dummyObject = {
//     id:12,
//     name:'dev_nayak',
//     jobTitle:'Web dev',
//     desc:'SDE-I'
// }

// for(const i in dummyObject){
//     console.log(`${i}: ${String(dummyObject[i])}`);
// }

// const{ id,name,jobTitle } = dummyObject;
// console.log(id,name,jobTitle);




// const array = ['ad','ed','eddy'];
// const [e,a,b] = array;
// console.log(e,a,b);


// const array = [1,2,3,4,5,6,7];
// let newArray = array.filter((value, index)=>{
//     return (value%2 === 0)
// });
// console.log(newArray);



// function getName(name){
//     return name;
// }
// let a = false;
// let b = false;
// console.log(a || b);


// let showRecipe = true;
// function getOne(nm){
//     return nm;
// }

// function getTwo(nm) {
//     return nm;
// }
// showRecipe ? console.log(getOne('Dev')):console.log(getTwo('Pizza'));


const id = 1;
const prodName = 'Apple Watch';
const rating = 5;
const product1 = {
    description:'Product 2 desc',
    id,
    prodName,
    rating
}

const {description} = product1;
console.log(description);
