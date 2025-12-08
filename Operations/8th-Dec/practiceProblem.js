let calculateFactorial = (num)=>{
    if(num <= 0) return 0;
    let count = 0;
    for(let i = 1; i<=num; i++){
        if(num%i == 0){
            count++;
        }
    }
    return count;
}
let ans = calculateFactorial(0)
console.log(ans)