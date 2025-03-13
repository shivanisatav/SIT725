var textsArray = ["Welcome to SIT 725", "Exploring More!", "Learning", "Coding", "Staying Curious"];
    var colorsArray = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFC733"];
    var index = 0;

    function changeText() {
        document.getElementById("heading").innerHTML = textsArray[index];
        document.body.style.backgroundColor = colorsArray[index];
        index = (index + 1) % textsArray.length; 
    }