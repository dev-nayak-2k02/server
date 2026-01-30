const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log('dataBase is connected successfully');
    } catch (error) {
        console.log('connection to DB failed!');
    }
}

module.exports = connectDB;