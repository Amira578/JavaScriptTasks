import React from 'react'
import {Link} from 'react-router-dom'




export const ListItem = (props)=>
  (
    
    <li className="  list-group-item my-2">
           <div className="row">
        <div className=" col-md-8 container justify-content-center">
       <h4> <Link to={`/task/${props.task.id}`}  >{props.task.title} </Link></h4>
        </div>
        <div className="col-md-4 text-right">
            <button className={`btn btn-${props.task.isDone ? 'danger' : 'success'} `  }
             onClick={()=>props.toggleDone(props.task)} >{props.task.isDone ? 'Re-open' : 'Done'} </button>
            <button className={`btn btn-primary mx-2 ${props.task.isDone ? 'd-none' : '' }  `}  > <Link id='Edit' to={`/task/edit/${props.task.id}`}> Edit </Link> </button>
        </div>
        </div>  
    
    </li>

  

  )



export default ListItem;