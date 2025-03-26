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
    alert("Thanks for your interest. Stay tuned for more tech updates!");
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.description + '</p>' +
            '<button class="waves-effect waves-light btn click-me-btn">'+ "Know More" +'</button>'
            '</div></div></div>';
        $("#card-section").append(itemToAppend);
    });
    $(document).on("click", ".click-me-btn", clickMe);
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    });
    addCards(cardList);
    $('.modal').modal();
});
