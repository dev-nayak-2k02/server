let checkNumber = function(n){
    let k = 1;
    while(true){
        let x = Math.pow(2,k)-1;
        if(x>=n){
            return x;
        }
        k++;
    }
}

console.log(checkNumber(189));
