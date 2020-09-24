var item1= document.getElementById("d1"),
item2=document.getElementById('d2'),
item3=document.getElementById('d3'),
item4=document.getElementById('d4'),
details=document.getElementById('details');


function detailsDisplay1(e){
    details.innerHTML="item1-details : 1 Lorem ipsum dolor sit amet consectetur adipisicing  elit. Sit suscipit eveniet laudantium quas unde officia reprehenderit inventore magnam facilis aliquid harum quae a facere laborum odit, culpa earum? Nesciunt, doloribus." 

}

function detailsDisplay2(e){
    details.innerHTML="item2-details : 2 Lorem ipsum dolor sit amet consectetur adipisicing  elit. Sit suscipit eveniet laudantium quas unde officia reprehenderit inventore magnam facilis aliquid harum quae a facere laborum odit, culpa earum? Nesciunt, doloribus." 

}
function detailsDisplay3(e){
    details.innerHTML="item3-details : 3 Lorem ipsum dolor sit amet consectetur adipisicing  elit. Sit suscipit eveniet laudantium quas unde officia reprehenderit inventore magnam facilis aliquid harum quae a facere laborum odit, culpa earum? Nesciunt, doloribus." 

}
function detailsDisplay4(e){
    details.innerHTML="item4-details : 4 Lorem ipsum dolor sit amet consectetur adipisicing  elit. Sit suscipit eveniet laudantium quas unde officia reprehenderit inventore magnam facilis aliquid harum quae a facere laborum odit, culpa earum? Nesciunt, doloribus." 

}

item1.addEventListener("click", detailsDisplay1);
item2.addEventListener("click",detailsDisplay2);
item3.addEventListener("click",detailsDisplay3);
item4.addEventListener("click",detailsDisplay4);



