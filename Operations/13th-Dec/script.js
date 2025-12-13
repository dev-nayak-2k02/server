// let completion = (args)=>{
//     return new Promise((resolve, reject) => {
//         const apiResponse = {
//             "name": "DevPrasanna",
//             "designation": "Currently works in GeeCoding"
//         }
//         const statusCode = 600;
//         if(statusCode == 200){
//             resolve(apiResponse)
//         } else {
//             reject('ERROR_CODE')
//         }
//     })
// }
// let ans = completion(true).then(result=>{
//     for(let k in result){
//         console.log(`${k}: ${result[k]}`)
//     }
// }).catch(err=>{
//     console.log(err)
// })




let arr = [11,12,11,11,11,13,14];
let obj = {};
arr.forEach((val)=>{
    (obj[val] === undefined) ? (obj[val] = 1) : (obj[val]++)
})
console.log(obj)