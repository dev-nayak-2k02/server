function checkPrime(prime, arg){
    prime(arg);
}

function prime(arg){
    let ctr = 0;
    for(let i=1; i<=arg; i++){
        if(arg%i==0){
            ctr++;
        }
    }
    if (ctr == 2) {
        console.log('prime');
    } else {
        console.log('not prime');
    }
}
checkPrime(prime, 17);