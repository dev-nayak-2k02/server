let arr = [20,40,10,30,50];
let check = 0;
let temp = 0;
for(let i = 0; i<arr.length; i++){
    check = arr[i];
    for(let j = i+1; j<=arr.length-1; j++){
        if(check < arr[j]){
            temp = check;
            check = arr[j];
            arr[j] = temp;
        }
        temp = 0;
    }
}
console.log(arr)