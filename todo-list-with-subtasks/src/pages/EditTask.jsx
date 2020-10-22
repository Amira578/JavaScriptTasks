import React, { Fragment } from 'react';


export const EditTask = props=>{

 const task= props.findTask(props.match.params.id)
 
return(
  <Fragment>
    <div className='container justify-content-center '>
                <form onSubmit={()=>props.taskTitleEditHandler } className='container justify-content-center '>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="taskEdit" value={props.taskEdit}
                            onChange={props.titleOnChangeHandler} />
                    </div>

                    <div className="text-center">
                        <button  className="btn btn-success" type='submit px-5 my-3'>Save</button>
                    </div>

                </form>

            </div>
  </Fragment>
           
)

}
export default EditTask;