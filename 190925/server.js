const express = require('express')
const app = express()
const { homeController, aboutController, productController } = require('./controller')
app.get('/',homeController)
app.get('/about',aboutController)
app.get('/product',productController)
app.get('/search/:roll',(req, res)=>{
  const product = [
    {
      "roll":1,
      "name":"Dev"
    },
    {
      "roll":2,
      "name":"Rahul"
    },
    {
      "roll":3,
      "name":"Priyanshu"
    }
  ]
  const singleProduct = product.find((product)=>product.roll === Number(req.params.roll))
  console.log(singleProduct);
  if(singleProduct){
    res.send({
      message:"Fetched sinle message",
      success:true,
      product:singleProduct
    })
    console.log(singleProduct.name)
  } else {
    res.send({
      message:"No product found",
      product: singleProduct
    })
  }
})

const PORT = 8000
app.listen(PORT, ()=>{
  console.log(`Server is running at PORT:${PORT}`);
})