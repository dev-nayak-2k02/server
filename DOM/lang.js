document.addEventListener("DOMContentLoaded", () => {
    let a = document.querySelector('#box');
    let btn = document.querySelector('button');

    btn.addEventListener('click', () => {
        a.style.backgroundColor = 'red';
    });
});
