const mongoose = require('mongoose')
const connectDB = async()=>{
    const conn = await mongoose.connect('mongodb://localhost:27017/')
    console.log('db connected')
}
module.exports = connectDB;