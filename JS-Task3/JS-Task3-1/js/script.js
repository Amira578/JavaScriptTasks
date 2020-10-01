const DropDownBtn = document.querySelector("#dropDown"),
removeBtn = document.getElementById("removeBtn");


function removeBtnHandeler(){
    DropDownBtn.options[DropDownBtn.selectedIndex].remove()
}
removeBtn.addEventListener("click",removeBtnHandeler)
