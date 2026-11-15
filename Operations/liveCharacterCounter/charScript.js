let inp = document.querySelector('input');
let btn = document.querySelector('#btn')
let tot = 0
inp.addEventListener('input', elem=>{
    tot = elem.target.value.length
})
btn.addEventListener('click', elem=>{
    document.querySelector('span').textContent = `${tot}`
})