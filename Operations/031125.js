checkPrime(prime,2)

function checkPrime(fnc,a){
    fnc(a);
}

function prime(a){
    if(a<=1){
        console.log('not-prime');
        return 
    }
    let ctr = 0;
    for(let i = 2; i<=a; i++){
        if(a%i == 0){
            ctr++;
        }
    }
    ctr === 2? console.log('Prime') : console.log('not-Prime');
}