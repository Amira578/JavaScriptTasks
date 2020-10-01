const setBackgroundBtn=document.getElementById("setBackgroundBtn"),
paragraph =document.getElementById("paragraph");



function setBackgroundColor(){
    paragraph.style.background="lightblue"

}

setBackgroundBtn.addEventListener("click",setBackgroundColor);