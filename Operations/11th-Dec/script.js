let checkStringIsPalindrome = str =>{
    let arr = str;
    let newStr = ''
    for(let i=arr.length-1; i>=0; i--){
        newStr += arr[i];
    }
    if(newStr == str){
        return true
    } else {
        return false
    }

}
let ans = checkStringIsPalindrome('pp')
console.log(ans);