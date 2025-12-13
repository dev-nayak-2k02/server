function completion (args){
    new Promise((resolve, reject) => {
        const apiResponse = {
            "name": "DevPrasanna",
            "designation": "Currently works in GeeCoding"
        }
        const statusCode = 200
        if(statusCode == 200){
            resolve(apiResponse)
        } else {
            reject('ERROR_CODE')
        }
    })
}
completion(true)