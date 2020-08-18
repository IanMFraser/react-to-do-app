import React, { useState } from 'react';
// import Db from './db.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import ToDoPage from './Components/ToDoPage';
import './App.css';

const App = () => {
  
  const [toDoLists, setToDoLists] = useState([
    {
      "title": "'To Do App' To Do",
      "items": [
          {
              "id": 0,
              "items": "implement title-bar  component",
              "isSelected": false
          },
          {
              "id": 1,
              "items": "refactor css to use flexbox and sass",
              "isSelected": false
          },
          {
              "id": 2,
              "items": "install json server for external storage of lists",
              "isSelected": false
          }
      ]
    },
    {
      "title": "Errands",
      "items": [
          {
              "id": 0,
              "items": "laundry",
              "isSelected": false
          },
          {
              "id": 1,
              "items": "cook lunch",
              "isSelected": false
          },
          {
              "id": 2,
              "items": "clean litter box",
              "isSelected": false
          }
      ]
    }
  ]) 

  const newListHandler = () => {
    const title = window.prompt("Please name new To-Do list:", "list name")
    //set a temp title and push an empty list 
    const newList = {
      "title": title,
      "items": []
    }
    setToDoLists([...toDoLists, newList])
  }

    //clear the form of all tasks
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