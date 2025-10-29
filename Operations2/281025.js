// let arr = [1,2,3,4,5,6,7,8,9,10,11]
// let ans = arr.reduce((accumulator, initialValue) =>{
//     return accumulator += initialValue;
// },1)
// console.log(ans);


for (let i = 1; i <= 5; i++) {
    let star = '';
    for(let j = 1; j <= i; j++){
        star += '*';
    }
    console.log(star);
}
