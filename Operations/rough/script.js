let frm = document.querySelector('form');
let nm = document.querySelector('#name');
frm.addEventListener('submit', (elem)=>{
    elem.preventDefault();
    const regex = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/
    const nmResult = regex.test(nm.value);
    console.log(nmResult)
})