import React, { useState, useEffect } from 'react'  
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MainPage from './Components/MainPage'
import ToDoPage from './Components/ToDoPage'
import './App.css'
import axios from 'axios'

const App = () => {

  //toDoLists state holds a list of objects that hold a todo lists id and title
  const [ toDoLists, setToDoLists ] = useState([])
  //tasks state holds a list of objects that hold a task, an id, isChecked, and which list it belongs to
  const [ tasks, setTasks ] = useState([])
  //new task state is for adding a new task to the toDoForm input
  const [ newTask, setNewTask ] = useState('')
  //is page still loading? 
  const [ isLoading, setIsLoading ] = useState(true)

  const url = 'http://localhost:3001'

  //collect the data from db.json
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

   //handler to add new task on form submission
   const newTaskSubmit = (e, id) => {
    e.preventDefault()

    if (newTask === ''){
      alert("Task cannot be empty")
    } else {
      const tempTask = {
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

  //create a new todo list
  const newListHandler = () => {
    const title = window.prompt("Please name new To-Do list:", "list name")
   
  
    if (title === '') {
      alert('Title can not be empty')
    } else if (title !== null) {
      const newList = {
        "title": title
      }

      axios
      .post(`${url}/todos`, newList)
      .then(response => {
        setToDoLists(prevState => [...prevState, response.data])
      })
      
    }
  }
        
  //delete a todo list by its id
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

  //change list title state and update db.json - called in editTitle
  const updateTitle = (id, newTitle) => {
    const  obj = toDoLists.find( l => l.id === id)
    const updateObj = {...obj,"title": newTitle}

    axios.put(`${url}/todos/${id}`, updateObj)
    .then(response => {
      setToDoLists(toDoLists.map(list => list.id !== id ? list : response.data))
    })
    
  }

  //edit title of list
  const editTitle = (id, title) => {
    const newTitle = window.prompt("Please enter a new title: ", title);

    if (newTitle === '') {
      alert('title can not be empty')
    } else if (newTitle !== null) {
        updateTitle(id, newTitle)
      }
  }

  //update isChecked field in db.json
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
        <Route path={"/" | "/todo"}>
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