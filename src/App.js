import React, {useState} from 'react';
import ToDoForm from './Components/ToDoForm';
import ListToDos from './Components/ListToDos';
import './App.css';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  const [toDos, setToDos] = useState([
    {
      id: 0,
      items: 'customize title card',
      isSelected: false
    },
    {
      id: 1,
      items: 'better way to create id for each task',
      isSelected: false
    },
    {
      id: 2,
      items: 'warning message before delete',
      isSelected: false
    }
  ]);
  const [newTask, setNewTask] = useState('');
  const [newTitle, setNewTitle] = useState('');

  //handler to update the new task input when typed
  const onChange = (e) => {
    setNewTask(e.target.value)
  }

  const generateId = () => {
    let id = toDos.length;
    return id++;
  }

  //handler to update toDo list on form submission
  const onSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: generateId(),
      items: newTask,
      isSelected: false
    }

    if(newTask === ''){
      alert('task cannot be empty')
    } else {
      setNewTask('')
      setToDos([...toDos, newItem])
    }
    console.log(toDos)
  }

  //handler to update whether the task is finished or not. - not sure if i need this.
  const checkedHandler= (e) => {
    const elementIndex = toDos.findIndex(el => el.id === Number(e.target.name));
    let newTodo = [...toDos];
    newTodo[elementIndex] = {
      ...newTodo[elementIndex],
      isSelected: e.target.checked
    }
    setToDos([...newTodo])
  }

  //clear the form of all tasks
  const deleteFormHandler = (e) => {
    let result = window.confirm('Delete list?');
    if (result){
      setToDos([]);
      setNewTitle('');
    }
  }

  const titleHandler = (e) => {
    setNewTitle(e.target.value);
  }

  return(
    <div className="container">
      <div className="title">
        <input type="text" placeholder="To Do" value={newTitle} onChange={titleHandler}/>
        <button onClick={deleteFormHandler}><FontAwesomeIcon icon={faTrash}/></button>
      </div>
      <ToDoForm newTask={newTask} changeHandler={onChange} submitHandler={onSubmit} />
      <ListToDos todos={toDos} checkedHandler={checkedHandler}/>
    </div>
  )
}

export default App;
