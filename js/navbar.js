let isNavigating = false; 
let hover;
let hover2;
document.addEventListener("DOMContentLoaded", loadPage);

function display(){
    if (!isNavigating) {
        isNavigating = true;
    window.location.href = "research.html";
    
    
}
}
function display2(){
    if(!isNavigating){
        isNavigating=true;
    window.location.href = "index.html";
    
    }
}

 
function loadPage(){
    hover = document.getElementById("hover");
    hover2=document.getElementById("hover2")
    hover.addEventListener("mouseover", display );
    hover2.addEventListener("mouseover", display2);

   

}
