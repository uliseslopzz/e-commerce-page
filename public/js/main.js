// Search Bar

const searchinput = document.getElementById("searchinput");
const clearbutton = document.getElementById("clearbutton");

clearbutton.addEventListener('click', function() {
    searchinput.value = "";
});