const student = require('./student')
const express = require('express')
const app = express();
const PORT = 3000;
app.use(express.json())
app.get('/', (req, res)=>{
    res.send('im home page')
})
app.post('/search', (req,res)=>{
    console.log(req.body)
})
app.listen(PORT, ()=>{
    console.log('server running')
    console.log(student)
})