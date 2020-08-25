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
      "title": "'To Do App' To Do",
      "items": [
          {
            "id": 0,
            "items": "implement title-bar  component",
          },
          {
            "id": 1,
            "items": "refactor css to use flexbox and sass",
          },
          {
            "id": 2,
            "items": "install json server for external storage of lists",
          }
      ]
    },
    {
      "id": 1,
      "title": "Errands",
      "items": [
          {
            "id": 0, 
            "items": "laundry"
          },
          {
            "id": 1,
            "items": "cook lunch"
          },
          {
            "id": 2,
            "items": "clean litter box"
          }
      ]
    }
  ]) 

  //create a new todo page
  const newListHandler = () => {
    const title = window.prompt("Please name new To-Do list:", "list name")
    const newId = toDoLists.length;
    //set a temp title and push an empty list 
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
  
  const editTitle = (id, title) => {
    const newTitle = window.prompt("Please enter a new title: ", title);

    if (newTitle === '') {
      alert('title can not be empty')
    } else if (newTitle !== null) {
      changeTitle(id, newTitle)
    }
    
  }

  console.log(toDoLists)


  return(
    <Router>
      <Switch>
        <Route path={"/todo/:id"}>
          <ToDoPage deleteListHandler={deleteListHandler} changeTitle={changeTitle} />
        </Route>
        <Route path='/'>
          <MainPage toDoLists={toDoLists} newListHandler={newListHandler} deleteListHandler= {deleteListHandler} editTitleHandler={editTitle}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;