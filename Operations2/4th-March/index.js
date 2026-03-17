const express = require('express')
const app = express()
app.use(express.json())
const PORT = 4000;
let i = 0;
app.post('/',(req, res)=>{
    console.log(`name : ${req.body[1].name}`);
    req.body.forEach((nm)=>{
        console.log(`studen ${++i}: ${nm.name}`)
    })
    res.send("*")
})
app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`);
})