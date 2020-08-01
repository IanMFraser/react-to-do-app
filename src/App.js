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
      items: 'delete button clears all tasks',
      isSelected: false
    }
  ]);
  const [newTask, setNewTask] = useState('');

  //handler to update the new task input when typed
  const onChange = (e) => {
    setNewTask(e.target.value)
  }

  //handler to update toDo list on form submission
  const onSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: toDos.length,
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
  return(
    <div className="container">
      <div className="title">
        <h1>To Do</h1>
        <button><FontAwesomeIcon icon={faTrash}/></button>
      </div>
      <ToDoForm newTask={newTask} changeHandler={onChange} submitHandler={onSubmit} />
      <ListToDos todos={toDos} checkedHandler={checkedHandler}/>
    </div>
  )
}

export default App;
