let checkPerfecttSquare = num =>{
    let ctr = Math.floor(Math.sqrt(num))
    if(ctr*ctr === num){
        return true
    }
    return false
}
let result = checkPerfecttSquare(56);
console.log(result);