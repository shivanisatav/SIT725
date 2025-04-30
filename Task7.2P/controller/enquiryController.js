const enquiryService = require("../services/enquiryService.js");

const submitEnquiry = async (req, res) => {
  try {
    const { first_name, last_name, password, email } = req.body;
    const enquiryData = { first_name, last_name, password, email };
    await enquiryService.createEnquiry(enquiryData);
    res.json({ statusCode: 200, message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: "Error submitting form", error });
  }
};

module.exports = {
  submitEnquiry,
};
