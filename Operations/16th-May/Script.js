// let a = true;
// let b = false;
// console.log(a || b);

// const person = {
//     id: 1123,
//     name: 'Dev Prasanna',
//     age: 23,
//     operation: 'Web-developer'
// }
// const { operation } = person;
// console.log(operation);

// let charArray = [
//   {
//     id: 1123,
//     name: "Dev Prasanna",
//     age: 23,
//     operation: "Web-developer",
//   },
//   {
//     id: 1124,
//     name: "Pushkarashin",
//     age: 24,
//     operation: "data-Analyst",
//   }
// ];

// const [e1, e2] = charArray;
// console.log(e1.name, e2.name);

// let arr1 = [1, 2, 3];
// console.log([999,...arr1,90]);

const personsArray = [
    {
        name:'Dev Nayak',
        age:40
    }, {
        name: 'Shivam',
        age:45
    }, {
        name: 'shubham',
        age:50
    }
];
// const result = personsArray.filter((val, index)=>{
//     return (val.age < 50);
// })
// console.log(result);

const result = personsArray.find((val, index)=>{
    return val.name === "Dev Nayak";
});
console.log(result);







