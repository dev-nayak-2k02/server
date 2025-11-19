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