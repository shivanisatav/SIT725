const cardList = [
  {
    title: "Smartwatch",
    image: "images/watch-2649380_640.png",
    link: "About Smartwatch",
    description: "A smartwatch that keeps track of your fitness and notifications."
  },
  {
    title: "VR Headset",
    image: "images/vr-headset.png",
    link: "About VR Headset",
    description: "Experience immersive virtual reality gaming and entertainment."
  },
];

const clickMe = () => {
  alert("Thank you for clicking me.. Have a nice day!!");
};

const addProjects = (projects) => {
  $("#card-section").empty();
  projects.forEach(project => {
    let projectToAppend = `
      <div class="col s12 m4 center-align">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${project.image}" alt="${project.title}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              ${project.title}<i class="material-icons right">more_vert</i>
            </span>
            <p><a href="#">${project.link}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              ${project.title}<i class="material-icons right">close</i>
            </span>
            <p class="card-text">${project.description}</p>
          </div>
        </div>
      </div>`;
    $("#card-section").append(projectToAppend);
  });
};

const fetchCards = () => {
  $.get("/api/projects", (data) => {
    addProjects(data);
  }).fail(() => {
    alert("Failed to load card data from server.");
  });
};

// This will bind only one handler to the submit button
$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('.modal').modal();
  $('#formSubmit').click((e) => {
    e.preventDefault(); 
    submitForm();      
  });
  fetchCards();
});
