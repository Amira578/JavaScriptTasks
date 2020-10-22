import React from 'react'
import Tasks from '../components/Tasks'

export const NewTask =props=>(
    <Tasks.Form titleOnChangeHandler={props.titleOnChangeHandler}
                                newTaskTitle={props.newTaskTitle}
                                subTaskInputs={props.subTaskInputs}
                                removeSubtaskHandler={props.removeSubtaskHandler}
                                SubTasksOnChangeHandler={props.SubTasksOnChangeHandler}
                                addNewSubtaskHandler={props.addNewSubtaskHandler}
                                onSubmitHandeler={props.onSubmitHandeler}
                            />
)

export default NewTask;