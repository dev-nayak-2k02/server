let form = document.querySelector('#validator-form');
let password = document.querySelector('#password');
let email = document.querySelector('#email');

form.addEventListener('submit', (elem)=>{
    elem.preventDefault();

    document.querySelector('#password-error').textContent = '';
    document.querySelector('#email-error').textContent = '';

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!*?&])[A-Za-z\d@$!*?&]{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);

    let isValid = true;
    
    if(!passwordAns){
        document.querySelector('#password-error').textContent = 'password is not correct';
        document.querySelector('#password-error').style.display = 'initial';
        isValid = false;
    }

    if(!emailAns){
        document.querySelector('#email-error').textContent = 'email is not correct';
        document.querySelector('#email-error').style.display = 'initial'
        isValid = false;
    }
    if(isValid){
        document.querySelector('#result-message').textContent = 'everythin is correct';
        document.querySelector('#result-message').style.color = 'green'
    }
})