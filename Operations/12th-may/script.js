let a = Number(prompt("enter a number: "));
function checkPerfect(a){
    let mod,sum,n;
    n = a;
    for(let i = 0; i<=a; i++){
        mod = a%i;
        if(mod == 0){
            sum += i;
        }
    }
    if(n === s){
        console.log("its a perfect mnumber")
    } else {
        console.log("its not a perfectnumber");
    }
}