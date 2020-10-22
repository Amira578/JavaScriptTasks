import React from 'react'
import ListItem from './Item'




export const List=({tasks,toggleDone})=>{
return(
       <ul className="list-group" >
          {tasks.map(task=>
              
              <ListItem  key={task.id} task={task} toggleDone={toggleDone}
            />
              )}

       </ul>

)

}