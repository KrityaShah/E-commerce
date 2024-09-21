const express = require("express");
const router = express.Router();
const enquiryForm = require("../controllers/enquiry-controller")


router.route("/enquiry").post(enquiryForm.enquiry);

module.exports = router;