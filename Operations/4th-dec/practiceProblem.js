function timerFunction(fn, delay){
    let call = Date.now();
    return function (){
        let current = Date.now();
        if(current - call >= delay){
            call = current;
            fn();
        }
    }
}
let ans = timerFunction(()=>{
    console.log('hi it happened')
}, 2000)