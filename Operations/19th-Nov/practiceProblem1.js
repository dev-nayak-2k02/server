function register (cb){
    setTimeout(() => {
        console.log('Register Page');
        cb();
    }, 1000);
}

function welcome (cb){
    setTimeout(() => {
        console.log('Welcome to my Page');
        cb();
    }, 1000);
}

function login (cb){
    setTimeout(() => {
        console.log('login successfull');
        cb();
    }, 1000);
}

function fetchData (cb){
    setTimeout(() => {
        console.log('Data fetched');
        cb();
    }, 1000);
}

function displayData (){
    setTimeout(() => {
        console.log('dta Displayed');
    }, 1000);
}

register(()=>{
    welcome(()=>{
        login(()=>{
            fetchData(()=>{
                displayData();
            })
        })
    })
});
