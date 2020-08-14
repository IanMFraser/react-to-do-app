import React, {useState} from 'react';
import ToDoForm from './Components/ToDoForm';
import ListToDos from './Components/ListToDos';
import TitleBar from './Components/TitleBar';
import './App.css';
// import './App.scss';

const App = ({lists}) => {
  // console.log(lists["items"]);
  const [toDos, setToDos] = useState(lists["items"]);
  const [newTask, setNewTask] = useState('');
  const [newTitle, setNewTitle] = useState(lists["title"]);

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

  const generateId = () => {
    let id = toDos.length;
    return id++;
  }
  
  //handler to update the new task input when typed
  const onChange = (e) => {
    setNewTask(e.target.value)
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

  //handler to update the title input when typed
  const titleHandler = (e) => {
    setNewTitle(e.target.value);
  }

  return(
    <div className="container">
      <TitleBar newTitle={newTitle} titleHandler={titleHandler} deleteFormHandler={deleteFormHandler}/>
      <ToDoForm newTask={newTask} changeHandler={onChange} submitHandler={onSubmit} />
      <ListToDos todos={toDos} checkedHandler={checkedHandler} />
    </div>
  )
}

export default App;
