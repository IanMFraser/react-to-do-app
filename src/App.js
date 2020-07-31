import React, {useState} from 'react';
import ToDoForm from './Components/ToDoForm';
import ListToDos from './Components/ListToDos';
import './App.css'

const App = () => {
  const [toDos, setToDos] = useState(['Build a to-do app', 'style it out']);
  const [newTask, setNewTask] = useState('');

  const onChange = (e) => {
    setNewTask(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(newTask === ''){
      alert('task cannot be empty')
    } else {
      setNewTask('')
      setToDos([...toDos, newTask])
    }
  }

  return(
    <div className="container">
      <h1>To Do</h1>
      <ToDoForm newTask={newTask} changeHandler={onChange} submitHandler={onSubmit} />
      <ListToDos  todos={toDos}/>
    </div>
  )
}

export default App;
