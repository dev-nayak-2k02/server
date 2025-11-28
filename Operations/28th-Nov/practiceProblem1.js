function runOnce(fn){
    let executed = false;
    return function(){
        if(!executed){
            executed = true;
            fn();
        }
    }
}
let ans = runOnce(()=>{
    console.log('hello world');
})

