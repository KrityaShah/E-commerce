const Enquiry = require("../model/enquiry-model")

// for enquiry:


const enquiry = async (req, res) =>{
    try {

        const {username, email, message } = req.body;

        const enquiryReceived = await Enquiry.create({username, email, message});

        res
        .status(200)
        .json({message: "Your enquiry has been subbmited"})
    } catch (error) {
        console.error(error);
        
    }
}

module.exports = {enquiry};