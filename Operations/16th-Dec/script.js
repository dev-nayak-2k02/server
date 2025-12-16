// let str = 'Apple';
// console.log(str.slice(2,5))

// console.log(myFunc());
// function myFunc(){
//     return 'works'
// }

var ans = (function testing() {
    let val = 10;
    return {
        set: function (num){
            val = num;
        },
        get: function (){
            return val
        }
    }
})();
console.log(ans.get())
ans.set(12)