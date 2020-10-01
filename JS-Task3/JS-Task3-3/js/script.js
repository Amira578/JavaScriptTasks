const link=document.querySelector("#link"),
boldWords=document.querySelectorAll(".boldWords");

for(let i=0;i<boldWords.length;i++){
boldWords[i].style.visibility = "hidden";
}

function ShowWords(e){
    for(let i=0;i<boldWords.length;i++){
        boldWords[i].style.visibility = "visible";
        boldWords[i].style.color = "green";
        boldWords[i].style.backgroundColor = "black";

        }
         }
        

function HideWords(){
    for(let i=0;i<boldWords.length;i++){
        boldWords[i].style.visibility = "hidden";
    
        }

}



link.addEventListener("mouseover",ShowWords,false);
link.addEventListener("mouseleave",HideWords)