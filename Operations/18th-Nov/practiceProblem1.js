const obj = new Object();
obj.nm = 'jhon';
obj.age = 12;
obj.desc = 'A very handsome guy';

for(let key in obj){
    let ctr = obj[key]
    if(ctr == 'john'){
        ctr = 'dev';
    }
}

console.log(obj.nm)