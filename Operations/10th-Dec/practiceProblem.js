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


// const id = 1;
// const prodName = 'Apple Watch';
// const rating = 5;
// const product1 = {
//     description:'Product 2 desc',
//     id,
//     prodName,
//     rating
// }

// const {description} = product1;
// console.log(description);



// const array = [1,2,3];
// const[a,b,c] = array;
// console.log(b);



const personsArray = [
    {
        name:'Dev',
        age:50,
        country:'USA'
    },
    {
        name:'shivam',
        age:23,
        country:'EU'
    },
    {
        name:'swaroop',
        age:24,
        country:'USA'
    },
    {
        name:'singham',
        age:26,
        country:'NZ'
    }
]
// let getAllItems = personsArray.find((val, index)=>{
//     return val.name === 'swaroop';
// })
// console.log(getAllItems);


// let someExperiment = personsArray.every((val,index)=>{
//     return val.age === 26;
// })
// console.log(someExperiment);


// let findIndexExperiment = personsArray.findIndex((val, index)=>{
//     return val.age == 26;
// })
// console.log(findIndexExperiment);


// let num = 100;
// let sumOfNTerms = Math.floor(num*(num+1)/2);
// console.log(sumOfNTerms);


// for(let i = 0; i<51; i++){
//     if(i%3 == 0){
//         console.log(i)
//     }
// }



// let user = +(prompt("Enter a number: "));
// for(let i=1; i<user+1; i++){
//     if(i%2 == 0){
//         console.log(i ,'is even');
//     } else {
//         console.log(i,' is odd');
//     }
// }




// for(let i = 1; i<101; i++){
//     if(i%3 == 0 && i%5 == 0){
//         console.log(i);
//     }
// }


// for(let i = 1; i<101; i++){
//     if(i%7 == 0){
//         break;
//     }
//     console.log(i);
// }


for(let i = 1; i<21; i++){
    if(i%3 == 0) continue;    
    console.log(i);
}