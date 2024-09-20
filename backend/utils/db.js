const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017/ecommerce";

const connectDb = async () =>{

    
    try {
        await mongoose.connect(URI)
        console.log("Connection sucessfull to DB");
        
    } catch (error) {
        console.error("connection failed");
        process.exit(0)
    }
}

module.exports = connectDb;