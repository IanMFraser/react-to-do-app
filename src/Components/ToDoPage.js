import React from 'react';
import ToDoForm from './ToDoForm';
import ListToDos from './ListToDos';
import TitleBar from './TitleBar';
import '../App.css';
import { withRouter, useHistory } from 'react-router-dom'

const ToDoPage = ({ location, deleteListHandler, tasks, newTask, taskHandler, onSubmit, isCheckedHandler }) => {
  //history is used to return to home
  const history = useHistory()
  //what is the current title of this list?
  const title = location.state.title
  //what is this lists id?
  const id = location.state.id
  //collect all the tasks associated with this list
  const toDoTasks = Array.from(tasks).filter(e => { return e.todosId === id} )
  
  return(
    <div className="container"> 
      <TitleBar title={title}  deleteFormHandler={() => {deleteListHandler(id); history.goBack()}}  />
      <ToDoForm newTask={newTask} changeHandler={taskHandler} submitHandler={(e) => {onSubmit(e, id)}} /> 
      <ListToDos todos={toDoTasks} isCheckedHandler={isCheckedHandler} />
    </div>
  )
}

export default withRouter(ToDoPage);
