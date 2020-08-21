import React, { useState } from 'react';
// import Db from './db.json';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from './Components/MainPage';
import ToDoPage from './Components/ToDoPage';
import './App.css';

const App = () => {
  
  const [toDoLists, setToDoLists] = useState([
    {
      "id": 0,
      "title": "'To Do App' To Do",
      "items": [
          {
            "items": "implement title-bar  component",
          },
          {
            "items": "refactor css to use flexbox and sass",
          },
          {
            "items": "install json server for external storage of lists",
          }
      ]
    },
    {
      "id": 1,
      "title": "Errands",
      "items": [
          {
            "items": "laundry"
          },
          {
            "items": "cook lunch"
          },
          {
            "items": "clean litter box"
          }
      ]
    }
  ]) 

  //create a new todo page
  const newListHandler = () => {
    const title = window.prompt("Please name new To-Do list:", "list name")
    //set a temp title and push an empty list 
    const newList = {
      "title": title,
      "items": []
    }
    setToDoLists([...toDoLists, newList])
  }
  
  //delete a todo page by it's title
  const deleteListHandler = (title) => {
    let result = window.confirm('Delete list?');
      
    if ( result) {
      const updatedLists = toDoLists.filter(obj => obj.title !== title)
      setToDoLists(updatedLists)
      
    }
  }

  return(
    <Router>
      <Switch>
        { toDoLists.map((list,i) => <Route key={ i } path={ `/${list["title"]}` } > <ToDoPage lists={ list } deleteListHandler={deleteListHandler} /> </Route> ) }
        <Route path='/'>
          <MainPage lists={ toDoLists } newListHandler={ newListHandler } deleteListHandler={deleteListHandler}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;