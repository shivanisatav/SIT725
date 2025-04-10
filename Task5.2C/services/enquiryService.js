const Enquiry = require("../model/enquiryModel.js");

const createEnquiry = async (enquiryData) => {
  const newEnquiry = new Enquiry(enquiryData);
  return await newEnquiry.save();
};

module.exports = {
  createEnquiry,
};
