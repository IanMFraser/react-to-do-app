import React, { useState, useEffect } from 'react'  
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MainPage from './Components/MainPage'
import ToDoPage from './Components/ToDoPage'
import './App.css'
import axios from 'axios'

const App = () => {

  //toDoLists state holds aa list of objects that represent todo lists
  //each object has an id (int), a title (string), and an items key(list of objects)
  const [ toDoLists, setToDoLists ] = useState([])
  const [ tasks, setTasks ] = useState([])
  const [ newTask, setNewTask ] = useState('')
  const [ isLoading, setIsLoading ] = useState(true)

  const url = 'http://localhost:3001'

  useEffect(() => {
    axios.all([
      axios.get(`${url}/todos`), 
      axios.get(`${url}/tasks`)
    ])
    .then(axios.spread((obj1, obj2) => {
      setToDoLists(obj1.data);
      setTasks(obj2.data)
      setIsLoading(false)
    }))
    .catch(error => console.log(error))
  }, [])

  if (isLoading) {
    return <div className="container">Loading...</div>
  }

  //handler to update the new task input when typed
  const newTaskHandler = (e) => {
    setNewTask(e.target.value)
  }

   //event handler to update toDo list on form submission
   const newTaskSubmit = (e, id) => {
    e.preventDefault()
    const newId = tasks.length

    if (newTask === ''){
      alert("Task cannot be empty")
    } else {
      const tempTask = {
        id: newId,
        items: newTask,
        isChecked: false,
        todosId: id
      }

      axios
        .post(`${url}/tasks`, tempTask)
        .then(response => {
          setTasks([...tasks, response.data])
          setNewTask('')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  //create a new todo page
  const newListHandler = () => {
    const title = window.prompt("Please name new To-Do list:", "list name")
    const newId = toDoLists.length;
  
    if (title === '') {
      alert('Title can not be empty')
    } else if (title !== null) {
      const newList = {
        "id": newId,
        "title": title
      }

      axios
      .post(`${url}/todos`, newList)
      .then(response => {
        setToDoLists(prevState => [...prevState, response.data])
      })
      
    }
  }
        
  //delete a todo page by it's title
  const deleteListHandler = (id) => {
    const todoCopy = toDoLists.filter(obj => obj.id !== id);
    let result = window.confirm('Delete list?');
      
    if (result) {
      axios
        .delete(`${url}/todos/${id}`)
        .then(response => {
          console.log(response.data)
          setToDoLists(todoCopy)
        })
    }
  }

  //changeTitle
  const updateTitle = (id, newTitle) => {
    const  obj = toDoLists.find( l => l.id === id)
    const updateObj = {...obj,"title": newTitle}

    axios.put(`${url}/todos/${id}`, updateObj)
    .then(response => {
      setToDoLists(toDoLists.map(list => list.id !== id ? list : response.data))
    })
    
  }

  //edit title handler
  const editTitle = (id, title) => {
    const newTitle = window.prompt("Please enter a new title: ", title);

    if (newTitle === '') {
      alert('title can not be empty')
    } else if (newTitle !== null) {
        updateTitle(id, newTitle)
      }
  }

  const isCheckedHandler = (e, id) => {
    console.log(e.target.checked)
    console.log(id)
    const task = tasks.find(task => task.id === id)
    const updateTask = { ...task, "isChecked": e.target.checked}
    
    axios.put(`${url}/tasks/${id}`, updateTask)
      .then(response => {
        setTasks(tasks.map(task => task.id !== id ? task : response.data))
      })

  }
  
  return(
    <Router>
      <Switch>
        <Route path={"/todo/:id"}>
          <ToDoPage 
           deleteListHandler={deleteListHandler} 
            onSubmit={newTaskSubmit}
            taskHandler={newTaskHandler} 
            tasks={tasks}
            newTask={newTask}
            isCheckedHandler={isCheckedHandler} />
        </Route>
        <Route path='/'>
          <MainPage 
            toDoLists={toDoLists} 
            newListHandler={newListHandler} 
            deleteListHandler= {deleteListHandler} 
            editTitleHandler={editTitle}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;