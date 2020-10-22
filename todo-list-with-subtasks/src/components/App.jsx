import { render } from '@testing-library/react'
import React, { Component, Fragment } from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import Layouts from '../layouts'
import EditTask from '../pages/EditTask';
import NewTask from '../pages/NewTask';
import Taskshow from '../pages/TaskShow';
import Tasks from './Tasks'







class App extends Component {

    state = {
        tasks: [
            {
                id: 1,
                title: 'task 1',

                isDone: false,
                subTasks: [{
                    id: 9,
                    title: 'subtask 1',
                    isDone: false
                },
                {
                    id: 2,
                    title: 'subtask 2',
                    isDone: true
                }


                ]
            },
            {
                id: '2',
                title: 'task 2',

                isDone: true,
                subTasks: [{
                    id: '3',
                    title: 'subtask 2',
                    isDone: false



                }]
            }
        ],

        newTaskTitle: '',
        taskEdit:'',
        subTaskInputs: [
            {
                id: 8,
                title: ''
            }
        ],
    }
    titleOnChangeHandler = e => {
        this.setState({ [e.target.id]: e.target.value })
    } 
     
    SubTasksOnChangeHandler = e => {
        //console.log('here')
        const subTaskInputs = this.state.subTaskInputs;
        subTaskInputs[e.target.dataset.index].title = e.target.value;
        this.setState({ subTaskInputs })
        // console.log(this.state.subTaskInputs)

    }

    removeSubtaskHandler = e => {
        const rowId = e.target.dataset.id
        const subTaskInputs = this.state.subTaskInputs.filter(input => {
            return rowId != input.id;
        })

        this.setState({ subTaskInputs })

    }

    addNewSubtaskHandler = () => {
        const newSubtask = {
            id: Date.now(),
            title: ''
        };

        const subTaskInputs = [...this.state.subTaskInputs, newSubtask]

        this.setState({ subTaskInputs })

    }
    toggleDone = (task) => {
        const tasks = this.state.tasks.filter(taskRow => {
            if (taskRow.id == task.id) {
                taskRow.isDone = !taskRow.isDone;
                if (taskRow.isDone == true) {
                    task.subTasks.filter(sTask => {
                        sTask.isDone = true;
                    })
                }
            }
            return task;
        });
        this.setState({ tasks });

    }
    toggleDoneSubtasks = (task, subTask) => {
        const tasks = this.state.tasks.filter(taskRow => {
            if (taskRow.id == task.id) {
                task.subTasks.filter(sTask => {
                    if (sTask.id == subTask.id) {
                        sTask.isDone = !sTask.isDone;
                        if (sTask.isDone == false) {
                            taskRow.isDone = false;
                        }
                    }
                })
                let flag=true;
                taskRow.subTasks.map(subtask=>{
                    if (!subtask.isDone){
                        flag=false;
                    }
                })
                if(flag){
                    taskRow.isDone = true;
                }
            }

            return task;
        });
        this.setState({ tasks });

    }
    //I want to pass the id of the task with the e 
    // Error e.preventDefault is not a function !!!!
    taskTitleEditHandler = e => {
        e.preventDefault();
        const tasks = this.state.tasks
        tasks.filter(task=>{
             if( task.id==1){// id instead of 1
                 task.title=this.state.taskEdit
            }
        }

        )

        console.log(this.state.taskEdit)
        this.setState({ tasks })
        console.log(this.state.tasks)
        
    }

    onSubmitHandeler = e => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title: this.state.newTaskTitle,
            isDone: false,
            subtasks: this.state.subTaskInputs
        }
        const tasks = [...this.state.tasks, newTask]
        //console.log(tasks)
        this.setState({ tasks })

    }

    findTask = taskId => {
        const result = this.state.tasks.filter(task => {
            return task.id == taskId;
        })

        if (result.length > 0) {
            return result[0];
        }
        return null;
    }

    render() {

        return (
            <Fragment>
                <div>
                    <Layouts.Nav />


                    <div className='container justify-content-center '>
                        <Switch >

                            <Route path="/task/create" exact>

                                <NewTask titleOnChangeHandler={this.titleOnChangeHandler}
                                    newTaskTitle={this.state.newTaskTitle}
                                    subTaskInputs={this.state.subTaskInputs}
                                    removeSubtaskHandler={this.removeSubtaskHandler}
                                    SubTasksOnChangeHandler={this.SubTasksOnChangeHandler}
                                    addNewSubtaskHandler={this.addNewSubtaskHandler}
                                    onSubmitHandeler={this.onSubmitHandeler}
                                />
                            </Route>
                            <Route path='/task/edit/:id' exact 
                              component={(props)=>(
                                  <EditTask {...props}
                                  taskEdit={this.state.taskEdit}
                                  findTask={this.findTask}
                                  taskTitleEditHandler ={this.taskTitleEditHandler}
                                  newTaskTitle={this.state.newTaskTitle}
                                  titleOnChangeHandler={this.titleOnChangeHandler}/>

                              )}
                            />
                                   

                                

                            <Route path='/task/:id' exact
                                component={props =>
                                    (
                                        <Taskshow {...props} findTask={this.findTask} toggleDoneSubtasks={this.toggleDoneSubtasks} />
                                    )
                                } />
                           

                            <Route path="/" exact >
                                <Tasks.List tasks={this.state.tasks}
                                    toggleDone={this.toggleDone} 
                                    />
                            </Route>

                        </Switch >

                    </div>
                    <Layouts.Footer />

                </div>

            </Fragment>
        );

    }
}





export default App;


