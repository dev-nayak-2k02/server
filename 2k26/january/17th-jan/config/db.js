const mongoose = require('mongoose')
const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log('DataBase Connected Successfully')
    } catch (error) {
        console.log('connection failed!');
    }
}

module.exports = connectDB