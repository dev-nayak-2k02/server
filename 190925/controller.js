export const homeController = (req, res)=>{
    res.send('welcome to home page');
}

export const aboutController = (req, res)=>{
    res.send('Welcome to about page');
}

export const productController = (req, res)=>{
    const product = [
        {
            "roll":1,
            "name":"dev"
        },
        {
            "roll":2,
            "name":"Rahul"
        },
        {
            "roll":3,
            "name":"priyanshu"
        },
        {
            "roll":4,
            "name":"shivam"
        }
    ]
    res.send({
        message: 'product found',
        status:true,
        products: product
    })
}