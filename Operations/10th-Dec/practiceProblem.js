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

// let arr = new Array(12);
// console.log(arr.length);





// let res = (function () {
//   let a = 12;
//   return {
//     setter: (val) => {
//       a = val;
//     },
//     getter: () => {
//       console.log(a);
//     },
//   };
// })();

// let isEvenOdd = (val)=>{
//     if(val%2 == 0) return 'The number is Even';
//     else return 'The number is Odd'; 
// }
// console.log(isEvenOdd(123))



// let checkNumber = (val)=>{
//     if(val > 0) return 'The number is Positive';
//     else if(val<0) return 'The Number is Negative';
//     else return 'The number is 0'
// }
// console.log(checkNumber(-12));




// let checkGreatest = (n1, n2, n3)=> {
//     if(n1>n2 && n1>n3) return n1;
//     else if(n2>n1 && n2>n3) return n2;
//     else return n3;
// }
// console.log(checkGreatest(12,32,10));




// let sumOfNTerms = (val)=>{
//     let ctr = 0;
//     for(let i=1; i<=val; i++){
//         ctr += i;
//     }
//     return ctr;
// }
// console.log(sumOfNTerms(5))




// var a = 12;
// var a = 13;
// console.log(a);


// const pi = 3.14;
// pi++;
// console.log(pi);



// let isEmpty = (value)=>{
//     if(value === null||value === undefined|| value === "") return 'given value is falsy';
//     else return 'given value is truthy';
// }
// console.log(isEmpty(""));




// function calc(a, b, op) {
//     switch(op){
//         case "+": 
//             console.log(a+b);
//             break;
//         case "-": 
//             console.log(a-b);
//             break;
//         case "*": 
//             console.log(a*b);
//             break;
//         case "/":
//             if(a<b) { [a,b] = [b,a] };
//             console.log(a/b);
//             break;
//         default:
//             break;
//     }
// }
// calc(2,4,"/");




// let score = 182;
// let results = (score<30)?"fail":(score<=50)?"Average":(score<=75)?"Good":(score<=100)?"Excellent":'enter Number under 100';
// console.log(results);




// let checkVowel = function (letter){
//     if('aeiou'.includes(letter.toLowerCase())) return "It's a Vowel";
//     else return "It's not a vowel";
// }

// console.log(checkVowel('i'));
// console.log(checkVowel('c'));
// console.log([]+[]);







// let fnc = num => num*num;
// console.log(fnc(5));





//BMI calculator-->
// function bmiCalc(wt,ht){
//     let result = parseInt(wt/ht);
//     return result;
// }
// console.log(bmiCalc(70,1.77));




//Greeting function
// let greet = (name) => `Hello ${name}, how are you`;
// console.log(greet("DevPrasanna"));




//sum using rest
// let sumRest = function (...num){
//     return num.reduce((acc, val)=>{
//         return acc+val;
//     },0)
// }
// console.log(sumRest(11,23,21,34))





//clouser counter funnction
// function counterFnc(){
//     let ctr = 0;
//     return function(){
//         ctr++;
//         return ctr;
//     }
// }
// let store = counterFnc();
// console.log(store());






//HOF's
// function outerFunction(x){
//     return function(y){
//         return x*y;
//     }
// }
// let result = outerFunction(5);
// console.log(result(5));




// let h1 = document.querySelector('h1');
// h1.outerHTML = "<h4 class=\"h1\">IDHAR HAI INDEX</h4>"
// console.dir(h1);


// let a = document.querySelector("a");
// let setter = a.getAttribute("href");
// a.removeAttribute("href")
// a.setAttribute(setter, "https://chatgpt.com/?openaicom_referred=true")






//use function to log even numbers in an array
// let arr = Array(5);
// let evenPusherFunction = (...num)=>{
//     num.filter(val=>{
//         if(val%2 === 0){
//             arr.push(val)
//         }
//     })
// }
// evenPusherFunction(12,14,16,17,19);
// console.log(arr);






//add tax using pure function
// let tax = 23;
// let taxAdder = (val)=>{
//     val+=tax;
//     return val;
// }
// console.log(taxAdder(12));








// (()=>{
//     console.log('hello there!');
// })()






// let discountCounter = ()=>{
//     return function(price, disc) {
//         return price - (price*disc/100);
//     }
// }
// let result = discountCounter();
// console.log(result(12,10));







// let toUpperCase = ()=>{
//     return function(val){
//         return val.toUpperCase();
//     }
// }
// let str = toUpperCase();
// console.log(str("AirWat"));





// const obj = {
//     nam:'dev',
//     siNo: 1123,
//     crNo:"122j212jrdn",
//     div:'Engineer'
// };
// let [first, second] = ["a", "b", "c"];
// const {nam, siNo, crNo} = obj;
// console.log(first, second);
// console.log(nam, siNo, crNo);







//create array print each students name:
// let namArray = ['devPrasanna', 'durgaPrasad', 'mahindraChinmaya'];
// namArray.forEach(val=>{
//     console.log(val);
// })



//fiter even numbers from array
// let evenFilter = [12,1,2,118];
// let result = evenFilter.filter((val)=>{
//     return val%2==0;
// })
// console.log(result);



//add GST
// let priceList = [112,14,645,98];
// const gstRate = 18;
// let gstAddedAmount = priceList.map((val)=>{
//     let gstAmount = val * gstRate/100;
//     return val += gstAmount;
// });
// console.log(gstAddedAmount);



//reduce
// let salary = [2500000, 1500000, 3000000];
// let totalPayroll = salary.reduce((totalAmout, valuePrice)=> {
//     return totalAmout + valuePrice;
// },0)
// console.log('total payroll: ',totalPayroll);



//grade find with methods support
// let arrayMarks = [{nam:"subodh",grd:'B'},{nam:"bodhigriva",grd:'C'},{nam:"sangram",grd:'A'},{nam:"devPrasanna",grd:'A+'}];
// let gradeFinder = arrayMarks.some((val)=>{
//     return val.grd == 'A';
// });
// console.log(gradeFinder);



// let arr = [1,2,3,4,5,6,7];
// let [first, second, third, fourth] = [...arr];
// console.log(first,second,third,fourth);



// let objectExample = {
//     nam:"devPrasanna",
//     siNo:'1190',
//     empID:'BCG!0@#3456Po34'
// }
// const {nam:names, siNo:serialNumber, empID:employeeIdentity} = objectExample;
// console.log(names);



let fruits = ["apple", "mango", "peach"];
let conCat = fruits.slice(0,2)
console.log(conCat);