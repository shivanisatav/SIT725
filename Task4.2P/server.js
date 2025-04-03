const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3004;

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Allows requests from the frontend

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/sit725db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("✅ Connected to MongoDB");
});

// Define Schema & Model for Enquiries
const EnquirySchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  password: String,
  email: String,
});

const Enquiry = mongoose.model("Enquiry", EnquirySchema);

// API Route to Handle Form Submission
app.post("/api/enquiry", async (req, res) => {
  try {
    const { first_name, last_name, password, email } = req.body;
    const newUser = new Enquiry({ first_name, last_name, password, email });
    await newUser.save();
    res.json({ statusCode: 200, message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: "Error submitting form", error });
  }
});
 
// Route to Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
