const mongoose = require("mongoose");


const enquirySchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
})


const Enquiry = new mongoose.model("Enquiry", enquirySchema)

module.exports = Enquiry;