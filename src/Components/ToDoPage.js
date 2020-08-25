import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ListToDos from './ListToDos';
import TitleBar from './TitleBar';
import '../App.css';
import { withRouter, useHistory } from 'react-router-dom'

//what do i need sent as props?
//the list, title, task, update title, update task, delete list
//but this is too many!
const ToDoPage = ({ location, deleteListHandler }) => {

  const history = useHistory();
  const title = location.state.lists.title;

  //I need to move these up to App.js
  const [ toDoItems, setToDoItems ] = useState(location.state.lists.items);
  const [ newTask, setNewTask ] = useState('');
  


  //handler to update the new task input when typed
  const newTaskHandler = (e) => {
    setNewTask(e.target.value)
  }

  //event handler to update toDo list on form submission
  const onSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: toDoItems.length,
      items: newTask
    }
  
    if(newTask === ''){
      alert('task cannot be empty')
    } else {
      setNewTask('')
      setToDoItems([...toDoItems, newItem])
    }
  }


  return(
    <div className="container"> 
      <TitleBar title={title}  deleteFormHandler={() => {deleteListHandler(); history.goBack()}}  />
      <ToDoForm newTask={newTask} changeHandler={newTaskHandler} submitHandler={onSubmit} /> 
      <ListToDos todos={toDoItems}  />
    </div>
  )
}

export default withRouter(ToDoPage);
