/* blog */
function bolgTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
/* blog */
/* index */
/* nav */
    function myFunction(x) {
    x.classList.toggle("change");
    var x = document.querySelector(".nav-iconlist");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
/* nav */
/* theme */
document.documentElement.style.setProperty("--color", localStorage.getItem("userThemeColor"));
var colorInput = document.querySelector("#choose-theme-color");
colorInput.addEventListener("change", function() {  
document.documentElement.style.setProperty("--color", this.value);
});
/* theme */
/* index */
