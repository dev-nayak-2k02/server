let form = document.querySelector('form');
let inp = document.querySelectorAll('input');
let btn = document.querySelector('button');
let tot = 0
form.addEventListener('submit', elem=>{
    elem.preventDefault()

    let billAmount = document.querySelector('#bill').value;
    let tipAmount = document.querySelector('#tip').value;
    if(document.querySelector('#bill').value || document.querySelector('#tip').value){
        billAmount = 0;
        tipAmount = 0;  
    }

    let total = billAmount * (tipAmount / 100)
    document.querySelector('#total').textContent = total.toFixed(2);
})
