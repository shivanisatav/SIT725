const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sit725db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

const sampleData = [
  {
    title: "Smartwatch",
    image: "images/watch-2649380_640.png",
    link: "About Smartwatch",
    description: "A smartwatch that keeps track of your fitness and notifications.",
  },
  {
    title: "VR Headset",
    image: "images/vr-headset.png",
    link: "About VR Headset",
    description: "Experience immersive virtual reality gaming and entertainment.",
  },
  {
    title: "Laptop",
    image: "images/laptop-312499_640.png",
    link: "About Laptop",
    description: "Experience learning and entertainment in high definition visuals.",
  },
];

Project.insertMany(sampleData)
  .then(() => {
    console.log("Sample data inserted");
    mongoose.connection.close();
  })
  .catch(err => console.error(err));