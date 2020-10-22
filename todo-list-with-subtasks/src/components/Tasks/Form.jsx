import React, { Fragment } from 'react'


export const Form = (props) => {
    return (

        <Fragment>
            <div className='container justify-content-center '>
                <form onSubmit={props.onSubmitHandeler} className='container justify-content-center '>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="newTaskTitle" value={props.newTaskTitle}
                            onChange={props.titleOnChangeHandler} />
                    </div>
                    <div className="form-group">
                        <div className='d-flex'>
                            <label htmlFor="title"> sub-tasks:</label>
                            <button type='button' className='btn btn-info px-3 mx-3' 
                            onClick={props.addNewSubtaskHandler}>+</button>
                        </div>

                        {props.subTaskInputs.map((input, index) => (
                            <div className="d-flex my-3 " key={input.id}>
                                <input type="text" className="form-control  col-md-10" data-index={index} 
                                 value={input.title} 
                                 onChange={props.SubTasksOnChangeHandler}
                                />
                                {props.subTaskInputs.length > 1 && <button
                                    type='button' className='btn btn-danger px-4 mx-5 '
                                    data-id={input.id} onClick={props.removeSubtaskHandler}>-</button>}

                            </div>
                        ))}


                    </div>

                    <div className="text-center">
                        <button type='submit' className="btn btn-success  px-5 my-3">Save</button>
                    </div>

                </form>

            </div>

        </Fragment>
    )


}