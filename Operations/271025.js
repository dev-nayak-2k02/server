
function prom(complete){
    return new Promise((resolve, reject) => {
        if (complete) {
            resolve('I m fulfilled')
        } else {
            reject('i m rejected')
        }
    });
}


prom(true).then(function(res){
    console.log(res);
});
prom(false).catch(function(error){
    console.log(error);
});