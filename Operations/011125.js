let a = 7;
let fact = 0;
for(let i = 1; i <= a; i++){
    if(a%i == 0){
        fact++;
    }
}
console.log(fact);