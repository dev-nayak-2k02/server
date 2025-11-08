function mainFnc(cb){
    let executed = false;
    return function (){
        if(!executed){
            executed = true;
            cb();
        }
    }
}

let resFnc = mainFnc(()=>{
    console.log('Hello ji, kaise ho!');
})
