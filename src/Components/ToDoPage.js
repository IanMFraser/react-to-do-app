import React from 'react';
import ToDoForm from './ToDoForm';
import ListToDos from './ListToDos';
import TitleBar from './TitleBar';
import '../App.css';
import { withRouter, useHistory } from 'react-router-dom'

const ToDoPage = ({ location, deleteListHandler, tasks, newTask, taskHandler, onSubmit, isCheckedHandler }) => {
 
  const history = useHistory()
  const title = location.state.title
  const id = location.state.id
  const toDoTasks = Array.from(tasks).filter(e => { return e.todosId === id} )
  
  return(
    <div className="container"> 
      <TitleBar title={title}  deleteFormHandler={() => {deleteListHandler(); history.goBack()}}  />
      <ToDoForm newTask={newTask} changeHandler={taskHandler} submitHandler={(e) => {onSubmit(e, id)}} /> 
      <ListToDos todos={toDoTasks} isCheckedHandler={isCheckedHandler} />
    </div>
  )
}

export default withRouter(ToDoPage);
