let form = document.querySelector('form');
let inp = document.querySelectorAll('input');
let btn = document.querySelector('button');
form.addEventListener('submit', elem=>{
    elem.preventDefault()

    let billAmount = document.querySelector('#bill').value;
    let tipAmount = document.querySelector('#tip').value;

    let total = billAmount * (tipAmount / 100)
    document.querySelector('#total').textContent = total.toFixed(2)
})
