import React from 'react';
  

/*const toggleDone=(task)=>{
    this.setState({
        isDone:! task.isDone
       });
} */  



const TaskItem = ( {task,toggleDone}) => {
    return (
        <div className="col-md-9">

            <div className="card mt-3">

                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.desc}</p>
                    <button className= {`btn btn-${task.isDone ? 'danger' : 'primary'} `  } onClick={()=>toggleDone(task)} >
                        {task.isDone ? 'Re-open' : 'Done'} </button>
                        <button className='btn btn-secondary m-3 px-4' >Edit</button>
                </div>
            </div>
        </div>
    )
}


export default TaskItem;