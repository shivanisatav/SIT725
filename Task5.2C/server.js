const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();
const port = process.env.PORT || 3004;

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/sit725db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Routes
app.use(enquiryRoutes);

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start Server
app.listen(port, () => {
  console.log(` Server running on port ${port}`);
});
