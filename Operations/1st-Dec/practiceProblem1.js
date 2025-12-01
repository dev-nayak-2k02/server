function promiseCaller(args){
    return new Promise((resolve, reject)=>{
        if(args){
            resolve('i am response');
        } else {
            reject('i am rejection');
        }
    })
}

promiseCaller(true).then()
