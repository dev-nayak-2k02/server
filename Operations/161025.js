let ari = 'apple';
console.log(ari.split('p'));


let trs = 'apple';
console.log(trs.replaceAll('p','i'));


let der = 'DevPrasanna';
console.log(der.indexOf('P'));

let str = 'Irokuni';
console.log(str.includes('f'));

let ans = (function(){
    let a;
    return {
        set: function(val){
            a = val;
        },
        get: function(){
            console.log(a);
        }
    }
})();
ans.set(10)
ans.get()
