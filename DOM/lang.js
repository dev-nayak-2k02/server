// document.addEventListener("DOMContentLoaded", () => {
//     let a = document.querySelector('#box');
//     let btn = document.querySelector('button');

//     btn.addEventListener('click', () => {
//         a.style.backgroundColor = 'red';
//     });
// });



let h5 = document.querySelector('h5');
let btn = document.querySelector('button');
let check = false;
btn.addEventListener('click',()=>{
    if (!check) {
        h5.style.color = 'green';
        h5.innerHTML = 'Friends'
        btn.innerHTML = 'Remove friend'
        check = true;
    } else {
        h5.style.color = 'red';
        h5.innerHTML = 'stranger'
        btn.innerHTML = 'Add friend'
        check = false;
    }
})


//Sum of two numbers
// let a = document.getElementById("first");
// let b = document.getElementById("second");
// let btn = document.querySelector('button')
// btn.addEventListener("click", () => {
//   let s = parseInt(a.value) + parseInt(b.value);
//   document.getElementById('res').value = s
// });



//Area of triangle
// let a = document.getElementById("first");
// let b = document.getElementById("second");
// let btn = document.querySelector('button');
// btn.addEventListener('click', ()=>{
//     let s = 0.5*parseFloat(a.value)*parseFloat(b.value);
//     document.getElementById('res').value = s;
// })



//Area of circle
// let b = document.getElementById("second");
// let btn = document.querySelector('button');
// btn.addEventListener('click', ()=>{
//     let s = 3.14*(parseFloat(b.value)*parseFloat(b.value));
//     document.getElementById('res').value = s;
// })