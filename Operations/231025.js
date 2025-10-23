function register(callback){
    setTimeout(() => {
        console.log("Register called");
        callback();
    }, 2000);
}

function welcome(){
    setTimeout(() => {
        console.log('Welcome to our application');
    }, 1000);
}

function login(){
    setTimeout(() => {
        console.log('login Here');
    }, 3000);
}

function fetchData(){
    setTimeout(() => {
        console.log('data fetched');
    }, 1000);
}

function displayData(){
    setTimeout(() => {
        console.log('data is displayed');
    }, 1000);
}
register(()=>{
    welcome()
    login()
    fetchData()
    displayData()
})


console.log('other works');
