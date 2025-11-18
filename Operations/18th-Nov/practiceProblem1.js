const obj = new Object();
obj.nm = 'john';
obj.age = 12;
obj.desc = 'A very handsome guy';

for(let key in obj){
    if(obj[key] === 'john'){
        obj[key] = 'dev';
    }
}

console.log(obj.nm);