const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const http = require("http"); 
const socketIo = require("socket.io"); 

const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();
const port = process.env.PORT || 3004;
const server = http.createServer(app); 
const io = socketIo(server); 

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


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Socket.IO logic
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (data) => {
    console.log("Message from client:", data);
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Start Server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
