import React, {useState} from 'react';
import ToDoForm from './ToDoForm';
import ListToDos from './ListToDos';
import TitleBar from './TitleBar';
import '../App.css';
import { withRouter } from 'react-router-dom'

const ToDoPage = ({ lists, deleteListHandler }) => {
 
  const [toDos, setToDos] = useState(lists["items"]);
  const [newTask, setNewTask] = useState('');
  const [newTitle, setNewTitle] = useState(lists["title"]);
  
  //handler to update the new task input when typed
  const newTaskHandler = (e) => {
    setNewTask(e.target.value)
  }

  //handler to update toDo list on form submission
  const onSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      items: newTask
    }
  
    if(newTask === ''){
      alert('task cannot be empty')
    } else {
      setNewTask('')
      setToDos([...toDos, newItem])
    }
  }

  //handler to update the title input when typed
  const titleHandler = (e) => {
    setNewTitle(e.target.value);
  }

  return(
    <div className="container"> 
      <TitleBar newTitle={newTitle} titleHandler={titleHandler} deleteFormHandler={() => {deleteListHandler(newTitle)}}/>
      <ToDoForm newTask={newTask} changeHandler={newTaskHandler} submitHandler={onSubmit} />
      <ListToDos todos={toDos}  />
    </div>
  )
}

export default withRouter(ToDoPage);
