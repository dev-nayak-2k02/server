const express = require('express');
const app = express()
app.use(express.json());
const PORT = 3000;
app.post("/search", (req, res)=> {
    // let obj = req.body;
    // console.log('Hello');
    // for(let k in obj) {
    //     console.log(`${k}: ${obj[k]}`)
    // }

    // req.body.map((item)=>{
    //     for(let k in item){
    //         console.log(`${k}: ${item[k]}`)
    //     }
    //     console.log(" ");
    // })

    

    res.send(req.body);
})
app.listen(PORT, ()=>{
    console.log(`listen is running - server created at PORT: ${PORT}`);
})