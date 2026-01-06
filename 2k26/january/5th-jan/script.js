let primeChecker = (a)=>{
    let count =0;
    for(let i = 1; i<=a; i++){
        if(a%i == 0){
            count++;
        }
    }
    if(count == 2){
        return true;
    } else {
        return false;
    }
}
let answer = primeChecker(11);
console.log(answer)
//if its a prime number or not