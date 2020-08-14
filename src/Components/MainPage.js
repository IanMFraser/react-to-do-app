import React from 'react';
import Db from '../db.json';
import DisplayLists from './DisplayLists';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from '../App'
import '../App.css';

const MainPage = () => {

    const toDoLists = Db["todos"];

    return(
        // add a new
        <Router>
            <div className="container">
                <h1>To Do</h1>
                <button>+</button>
                <DisplayLists lists={toDoLists}/>

                <Switch>
                    {toDoLists.map((list,i) => <Route key={i} path={`/${list["title"]}`} ><App lists={list} /></Route>)}
                </Switch>
            </div>
        </Router>
    )
}

export default MainPage;