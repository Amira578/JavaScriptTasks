"use strict";

//define variables

const tasks=[
    {  id:1,
       title:"Task1",
       description:" this is our first task",
       isDone:false
    },
    {  id:2,
        title:"Task3",
        description:" this is our third task",
        isDone:true
     }
]


//Actions
 function  drawForm(){
    $('.form-btn').empty();
    $('.form-btn').html(`
    <button class="btn "id="btn-add-task">Add</button>
    `)
}
const printTasks= function(){
    $('#tasks').empty();
    for(let i=0; i<tasks.length ; i++){
    $('#tasks').append(`
    <div class=" list-group-item d-flex justify-content-between">
    <div class="task-content">
       <h3  class=" title ${tasks[i].isDone ? "line-through":""}"  data-desc="#data-desc-${i}">${tasks[i].title}</h3>
       <p class="d-none description " id="data-desc-${i}"> ${tasks[i].description} </p>
    </div>
   <div  class="task-btns">
   <button class="btn  mx-2  ${tasks[i].isDone ? "d-none":""}"  data-task-id="${tasks[i].id}" id="btn-edit" >Edit</button>
   <button class=" toggle-done btn btn-${tasks[i].isDone ? "danger":"success"} mx-2" data-task-id="${tasks[i].id}" id="btn-isdone" >${tasks[i].isDone?"Re-open":"Done"}</button>
   </div>

</div>

    `)}
}


function resetForm() {
    $('input#title-input').val('');
    $('textarea#description-input').val('');
}

const addTask= function(){
       if ($('input#title-input').val()==''){
           alert("title is missing");
           return;
       }
       else if ($('textarea#description-input').val()==''){
        alert("description is missing");
        return;
       }


     const  dynamicID= tasks.length+1;
    const newTask = {
        id: dynamicID,
        title: $('input#title-input').val(),
        description: $('textarea#description-input').val(),
        isDone:false
    }

    tasks.push(newTask);
    resetForm();
    printTasks();

}

const toggleDoneHandler= function(){
 const target =$(this).data('task-id')

 for (let i = 0; i < tasks.length; i++) {
    if (target == tasks[i].id) {
        tasks[i].isDone = !tasks[i].isDone;
        break;
    }
}

printTasks();

}


const editHandler= function(){
    const taskToEdit=$(this).data("task-id");
    for (let i = 0; i < tasks.length; i++) {
        if (taskToEdit == tasks[i].id) {
            $('input#title-input').val( tasks[i].title);
            $('textarea#description-input').val(tasks[i].description);
            $('.form-btn').html(`
            <button class="btn  "id="btn-edit-task">Save</button>
            `)

            document.getElementById('btn-edit-task').addEventListener('click',function(){
                if ($('input#title-input').val()==''){
                    alert("title is missing");
                    return;
                }
                else if ($('textarea#description-input').val()==''){
                 alert("description is missing");
                 return;
                }
                tasks[i].title=  $('input#title-input').val();
                tasks[i].description= $('textarea#description-input').val();
                
                resetForm();
                 drawForm();
                printTasks();
            })
           
        }
        
        
    }

}

//Events
$(function() {
    drawForm();
    printTasks();

//$('button#btn-add-task').click(addTask);
});

$(document).on('click', 'button#btn-add-task', addTask);

$(document).on('click',"h3.title",function(){
    $(this).nextAll('p.description').toggleClass('d-none');

})

$(document).on('click',".toggle-done",toggleDoneHandler);
$(document).on('click',"#btn-edit",editHandler);