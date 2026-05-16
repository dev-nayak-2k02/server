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

let charArray = [
  {
    id: 1123,
    name: "Dev Prasanna",
    age: 23,
    operation: "Web-developer",
  },
  {
    id: 1124,
    name: "Pushkarashin",
    age: 24,
    operation: "data-Analyst",
  }
];


const [e1, e2] = charArray;
console.log(e1.name, e2.name);