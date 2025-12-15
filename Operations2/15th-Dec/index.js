const express = require('express');
const app = express()
// app.use(express.json());
const PORT = 3000;
let students = [
    {
        name:"dev nayak",
        roll:13
    },
    {
        name:"Shivam",
        roll:14
    },
    {
        name:"swagat",
        roll:13
    }
]
app.get("/search", (req, res)=> {
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

    res.json(students)
    
})
app.listen(PORT, ()=>{
    console.log(`listen is running - server created at PORT: ${PORT}`);
})