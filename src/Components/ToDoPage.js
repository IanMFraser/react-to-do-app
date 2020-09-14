import React from 'react';
import ToDoForm from './ToDoForm';
import ListToDos from './ListToDos';
import TitleBar from './TitleBar';
import '../App.css';
import { withRouter, useHistory } from 'react-router-dom'

const ToDoPage = ({ location, deleteListHandler, newTask, taskHandler, onSubmit, isCheckedHandler }) => {

  const history = useHistory();
  const title = location.state.lists.title;
  const toDoItems = [...location.state.lists.items];
  const id = location.state.id;
  console.log(id)
  return(
    <div className="container"> 
      <TitleBar title={title}  deleteFormHandler={() => {deleteListHandler(); history.goBack()}}  />
      <ToDoForm newTask={newTask} changeHandler={taskHandler} submitHandler={(e) => {onSubmit(e, id)}} /> 
      <ListToDos todos={toDoItems} isCheckedHandler={e => {isCheckedHandler(e, id)}}  />
    </div>
  )
}

export default withRouter(ToDoPage);
