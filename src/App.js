import React from 'react';
import Db from './db.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import ToDoPage from './Components/ToDoPage';
import './App.css';

const App = () => {
  
  const toDoLists = Db["todos"];

  return(
    <Router>
      <Switch>
        {toDoLists.map((list,i) => <Route key={i} path={`/${list["title"]}`} > <ToDoPage lists={list} /> </Route> )}
        <Route path='/'>
          <MainPage lists={toDoLists} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;