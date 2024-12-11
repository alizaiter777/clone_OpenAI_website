
let hover;
document.addEventListener("DOMContentLoaded", loadPage);

function display(){
    window.location.href = "research.html";
}

 
function loadPage(){
    hover = document.getElementById("hover");
    hover.addEventListener("mouseover", display);
   

}
