//implement a fnc that accepts a callback and only executes it once
function mainFunction(cb){
    let executed = false;
    return ()=>{
        if(!executed){
            executed = true;
            cb();
        }
    }
}
let ans = mainFunction(()=>{console.log('execution complete')})
ans();
ans();