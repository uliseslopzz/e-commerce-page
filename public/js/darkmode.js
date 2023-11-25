document.addEventListener("DOMContentLoaded", function () {

    var icon = document.getElementById("icon-darkmode");

    if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light");
    }

    let localData = localStorage.getItem("theme");

    var imageBasePath = "public/img/";

    if (window.location.pathname.includes("views")) {
        imageBasePath = "../img/";
    }

    if (window.location.pathname.includes("products")) {
        imageBasePath = "../../img/";
    }

    if(localData == "light"){
        icon.src = imageBasePath + "moon.png";
        document.body.classList.remove("dark-theme");
    }
    else if(localData == "dark"){
        icon.src = imageBasePath + "sun.png";
        document.body.classList.add("dark-theme");
    }

    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = imageBasePath + "sun.png";
            localStorage.setItem("theme", "dark");
        }else{
            icon.src = imageBasePath + "moon.png";
            localStorage.setItem("theme", "light");
        }
    }
});