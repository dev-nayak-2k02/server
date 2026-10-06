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

// const personsArray = [
//   {
//     name: "Dev",
//     age: 50,
//     country: "USA",
//   },
//   {
//     name: "shivam",
//     age: 23,
//     country: "EU",
//   },
//   {
//     name: "swaroop",
//     age: 24,
//     country: "USA",
//   },
//   {
//     name: "singham",
//     age: 26,
//     country: "NZ",
//   },
// ];
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

// for(let i = 1; i<21; i++){
//     if(i%3 == 0) continue;
//     console.log(i);

// }

// let ctr = 0;
// for (let i = 1; i < 101; i++) {
//   if (i % 2 != 0) {
//     ctr++;
//     console.log(i);
//   }
//   if(ctr == 5){
//     break;
//   } 
// }



// let num = () => 12;
// console.log(num());




// let tot = 0;
// function giveTotal(...num){
//   num.forEach(element => {
//     tot = tot + element;
//   });
//   return tot;
// }
// console.log(giveTotal(12,11,34,1));




// function getAnswer(age){
//   if(age < 18) return 'not allowed';
//   return 'allowed';
// }
// console.log(getAnswer(56))



// function h(){
//   return;
// }
// console.log(h());


// function runn(val){
//   console.log(val())
// }
// runn(function(){
//   return 'hello'
// })


// function outer(){
//   let count = 0;
//   return function (){
//     count++;
//     return count;
//   }
// }
// let mainFnc = outer();
// console.log(mainFnc());
// console.log(mainFnc());




// let access = (function() {
//   let score = 0;
//   return{
//     getScore: function(){
//       console.log(score);
//     },
//     setScore: function(val){
//       score = val
//     }
//   }
// })();





// function discountCalculator(discount){
//   return function(value){
//     let discAmount = value * (discount/100);
//     let finalAmount = value - discAmount;
//     return finalAmount;
//   }
// }
// console.log(discountCalculator(20)(340))






// function clouser(){
//   let ctr = 0;
//   return function(){
//     ctr++;
//     return ctr;
//   }
// }
// let c = clouser();
// console.log(c());
// console.log(c());
// console.log(c());


// console.log(count);  
// var count = 42;

// const data = {
//   name: 'Dev Prasanna',
//   roll: 12,
//   desg: 'MCA'
// }
// data.role = 'student';
// const keyName = 'year';
// data[keyName] = '1st';
// data['year'] = '2nd';
// console.log(data);



// const arr = [11,12,34,56];
// arr.push(12);
// console.log(arr);



// console.log(typeof []);
// console.log(typeof null);
// console.log(typeof 123n);
// console.log(typeof function(){});



// let str = 'dev';
// let strArray = [...str];
// str = strArray.reverse().join('');
// console.log(str);



// let str = 'dev';
// let k = '';
// for(let i = str.length-1; i>=0; i--){
//     k += str[i];
// }
// console.log(k);



// let fnc = (function (){
//     let val = 0;
//     return {
//         getter: function (){
//             console.log(val)
//         },
//         setter: function (a){
//             val = a;
//         }
//     }
// })();

// let arr = [10, 20, 30];
// let newArr = arr.reduce((acc, val)=>{
//     return acc + val;
// }, 0)
// console.log(newArr);



// let obj = new Object();
// console.log(obj)


// let obj1 = {
//     name:'dev',
//     age:23,
//     email:'test@gmail.com'
// }
// let obj2 = {
//     name:'ved',
//     age:24,
//     email:'test2@gmail.com'
// }
// for(let key in obj1){
//     console.log(key, obj1[key])
// }

// let obaba = {...obj1};
// console.log(obaba);






// let obj1 = {
//     name:'dev',
//     age:23,
//     email:'test@gmail.com',
//     true:'dd'
// }
// console.log(age,obj1['age']);






// const user = {
//     'first-name': "harsh"
// };
// let {'first-name': firstName} = user
// console.log(firstName)


// let obj = {
//     name: 'Dev Prasanna',
//     age:21,
//     roll:'MCA025',
//     address:{
//         state:'Odisha',
//         dist:'SBPR'
//     }
// }
// let {name, roll, address:{state}} = obj
// obj['emp-name']='qwerty'
// console.log(!!(obj.address.dist));
// for(let key in obj){
//     console.log(key, obj[key]);
// }
// console.log(roll)


// let obj = {
//     name: 'Dev Prasanna',
//     age:21,
//     roll:'MCA025',
//     address:{
//         state:'Odisha',
//         dist:'SBPR'
//     }
// }

// for(let key in obj) {
//     console.log(key, obj[key]);
// }
// let obj2 = Object.assign({con:'gen1'}, obj)
// console.log(obj2)
// let obj3 = JSON.parse(JSON.stringify(obj2));
// console.log(obj3);
// obj.address.state = 'jharkhand'




// let object = {
//     "first-name": "Harsh"
// }
// console.log(object["first-name"]);




// let key = 'age'
// const user = {
//     age:26
// }
// console.log(user[key]);





// let object = {
//     "first-name": "Harsh",
//     "second-name": "Harvajan",
//     "third-name": "harmanjeet"
// }
// let {"first-name":firstName}=object;
// console.log(firstName);
// Object.entries(object).forEach((val)=>{
//     console.log(JSON.stringify(`${val[0]} : ${val[1]}`));
// })




// let key = 'admin';
// const user = {
//     name: 'devPrasanna',
//     [key]: 1988
// }
// console.log(user[key]); 



let arr = new Array(12);
console.log(arr);