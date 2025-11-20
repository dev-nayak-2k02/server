//implement a fnc that accepts a callback and only executes it once
// function mainFunction(cb){
//     let executed = false;
//     return ()=>{
//         if(!executed){
//             executed = true;
//             cb();
//         }
//     }
// }
// let ans = mainFunction(()=>{console.log('execution complete')})
// ans();
// ans();



//Implement a fnc that throttles another fnc
function throt(fn, delay){
    let lastCall = 0;
    return function (){
        let current = Date.now();
        if(current - lastCall >= delay){
            lastCall = current;
            fn();
        }
    }
}
let ans = throt(()=>{console.log('execution happened')},2000);
