const express = require("express");
const router = express.Router();
const enquiryController = require("../controller/enquiryController");

router.post("/api/enquiry", enquiryController.submitEnquiry);

module.exports = router;
