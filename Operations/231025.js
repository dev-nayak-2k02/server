function register(callback){
    setTimeout(() => {
        console.log("Register called");
        callback();
    }, 2000);
}

function welcome(cb){
    setTimeout(() => {
        console.log('Welcome to our application');
        cb();
    }, 2000);
}

function login(cbc){
    setTimeout(() => {
        console.log('login Here');
        cbc();
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
    welcome(()=>{
        login(()=>{
            fetchData();
            displayData();
        });
        
    });
    
})
console.log('other works');
