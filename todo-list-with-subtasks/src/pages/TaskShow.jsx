import React, { Fragment } from 'react'
import Tasks from '../components/Tasks'

export const Taskshow =props=>{
    const task=props.findTask(props.match.params.id);
return(


<div>
{task? 
<Fragment>
<h1>{ task && task.title}</h1>

<ul className="list-group">
{ task && task.subTasks && task.subTasks.map((subTask)=>(
<li className="  list-group-item my-2"
   key={subTask.id} >
          <div className="row">
        <div className=" col-md-8 container justify-content-center">
       {subTask.title}
       </div>
       <div className="col-md-4 text-right">
            <button className={`btn btn-${subTask.isDone ? 'danger' : 'success'} `  }
             onClick={()=>props.toggleDoneSubtasks(task,subTask)} >{subTask.isDone ? 'Re-open' : 'Done'} </button>
            <button className={`btn btn-primary mx-2 ${subTask.isDone ? 'd-none' : '' } `} >Edit </button>
        </div>
       </div>
       </li>)
   )}
</ul>
</Fragment> : <h1>Not Found</h1> }

</div>
)
}

export default Taskshow;