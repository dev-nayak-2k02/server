let complete = function(arg){
    return new Promise((resolve, reject) => {
        if(arg){
            resolve('I am fullfilled');
        } else {
            reject('I am rejected');
        }
    })
}

function onFulFillment(res){
    console.log(res)
}

function onRejection(err) {
    console.log(err);
}

complete(true).then(onFulFillment);
complete(false).catch(onRejection);