import React, { Fragment } from 'react';
import '../assets/scss/app.scss'
import Nav from '../layouts/Nav';
import TaskItem from './tasks/TaskItem';

export default class App extends React.Component {

    state = {

        tasks: [
            {
                id: 1,
                title: 'task 1',
                desc: 'our first task',
                isDone: false
            },
            {
                id: 2,
                title: 'task 2',
                desc: 'our 2nd task',
                isDone: true
            }


        ],
          newTask:{
            title: 'task 2',
            desc: 'our 2nd task',
            isDone: false

          },
        isAddNewTask:false


    }
   updateIsAddNewTask=()=>{
       this.setState({
        isAddNewTask:! this.state.isAddNewTask
       });
   }

   onChangeHandler=e=>{
       const newTask = this.state.newTask;
       newTask[e.target.id]=e.target.value;
   this.setState({
    newTask:newTask
   })
   }

   onSubmitHandler=e=>{
       e.preventDefault();

       const tasks=this.state.tasks;
       tasks.push(this.state.newTask)
       this.setState({
           tasks:tasks
       })
   }

    toggleDone=(task)=>{
        const tasks = this.state.tasks.map(taskRow => {
            if(taskRow.id == task.id) {
                taskRow.isDone = !taskRow.isDone;
            }
            return task;
        });
        this.setState({tasks});
        
    }   
   
   



    render() {

        return (

            <Fragment>

                <Nav />
                <div className="container">
                    <h1>Tasks</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                        <button className={`btn btn-success ${this.state.isAddNewTask?'d-none':''} `}onClick={this.updateIsAddNewTask} >Add Task</button>
                        <form onSubmit={this.onSubmitHandler} className={`w-100  ${this.state.isAddNewTask?'':'d-none'}`}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" className='form-control' onChange={this.onChangeHandler} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="desc">Description</label>
                                <textarea  id="desc" cols="30" rows="10" className='form-control'
                                 onChange={this.onChangeHandler}/>
                            </div>
                            <div className='text-center'>
                                <button  className='btn btn-success m-3' >Save</button>
                                <button type='button' className='btn btn-warning m-3' onClick={this.updateIsAddNewTask} >Close</button>
                            </div>

                        </form>
                        </div>

                            {this.state.tasks.map(task=> 
                                <TaskItem key={task.id} task={task} toggleDone={this.toggleDone}/> 

                                
                            )}


                    
                    </div>

                </div>

            </Fragment>
        )
    }
}

