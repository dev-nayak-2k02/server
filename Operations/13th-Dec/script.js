let completion = (args)=>{
    return new Promise((resolve, reject) => {
        const apiResponse = {
            "name": "DevPrasanna",
            "designation": "Currently works in GeeCoding"
        }
        const statusCode = 600;
        if(statusCode == 200){
            resolve(apiResponse)
        } else {
            reject('ERROR_CODE')
        }
    })
}
let ans = completion(true).then(result=>{
    for(let k in result){
        console.log(`${k}: ${result[k]}`)
    }
})


const retry = (callback, retries, delay) =>{

}
