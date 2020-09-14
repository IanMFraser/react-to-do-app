import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from './Components/MainPage';
import ToDoPage from './Components/ToDoPage';
import './App.css';

const App = () => {
  //toDoLists state holds aa list of objects that represent todo lists
  //each object has an id (int), a title (string), and an items key(list of objects)
  const [toDoLists, setToDoLists] = useState([
    {
      "id": 0,
      "title": "Morning",
      "items": [
          {
            "id": "task-0",
            "items": "drink tea",
            "isChecked": false
          },
          {
            "id": "task-1",
            "items": "exercise",
            "isChecked": false
          },
          {
            "id": "task-2",
            "items": "make breakfast",
            "isChecked": false
          }
      ]
    },
    {
      "id": 1,
      "title": "Afternoon",
      "items": [
          {
            "id": "task-0", 
            "items": "laundry",
            "isChecked": false
          },
          {
            "id": "task-1",
            "items": "cook lunch",
            "isChecked": false
          },
          {
            "id": "task-2",
            "items": "code",
            "isChecked": false
          }
      ]
    }
  ]) 
  const [ newTask, setNewTask ] = useState('');

  //handler to update the new task input when typed
  const newTaskHandler = (e) => {
    setNewTask(e.target.value)
  }

   //event handler to update toDo list on form submission
   const newTaskSubmit = (e, id) => {
    e.preventDefault()
    const toDoCopy = [...toDoLists]
    const newId = toDoLists[id].items.length
    if (newTask === ''){
      alert("Task cannot be empty")
    } else {
      const tempTask = {
        id: `task-${newId}`,
        items: newTask,
        isChecked: false
      }
      toDoCopy.forEach((list) => {
        if(list.id === id){
          list.items.push(tempTask)
        }
      })
      setNewTask('')
      setToDoLists([...toDoCopy])
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
        "title": title,
        "items": []
      }
      setToDoLists([...toDoLists, newList])
    }
  }
        
  //delete a todo page by it's title
  const deleteListHandler = (title) => {
    let result = window.confirm('Delete list?');
            
    if (result) {
      const updatedLists = toDoLists.filter(obj => obj.title !== title)
      setToDoLists(updatedLists)  
    }
  }

  //changeTitle
  const changeTitle = (id, newTitle) => {
    const toDoCopy = [...toDoLists]

    toDoCopy.forEach((list) => {
      if(list.id === id){
        list.title = newTitle;
      }
    })
    setToDoLists([...toDoCopy])
  }

  //edit title handler
  const editTitle = (id, title) => {
    const newTitle = window.prompt("Please enter a new title: ", title);

    if (newTitle === '') {
      alert('title can not be empty')
    } else if (newTitle !== null) {
      changeTitle(id, newTitle)
    }
  }

  const isCheckedHandler = (e, id) => {
    const tempList = [...toDoLists]
    const tempItems = tempList[id].items
    // const tempTitle = tempList[id].title
    //console.log(e.target.name)
    tempItems[e.target.name].isChecked = e.target.checked
    //console.log(tempItems)
    // const updatedList = {
    //   "id": id,
    //   "title": tempTitle,
    //   "items": tempItems
    // }
    console.log(tempList)
    setToDoLists(tempList)
    // console.log(toDoLists)
  }
  
  return(
    <Router>
      <Switch>
        <Route path={"/todo/:id"}>
          <ToDoPage 
           deleteListHandler={deleteListHandler} 
            onSubmit={newTaskSubmit}
            taskHandler={newTaskHandler} 
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