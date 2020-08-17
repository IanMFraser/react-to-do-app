import React from 'react';
import DisplayLists from './DisplayLists';
import '../App.css';
import { withRouter, useHistory } from 'react-router-dom';


const MainPage = ({ lists, newListHandler }) => {
    
    const history = useHistory()
    const redirectTodo = () => {
        history.push('/newToDo')
    }

    return(
        <div className="container">
            <div className="main-header">
                <h1>To Do</h1>
                <button onClick={ () => { newListHandler(); redirectTodo(); } }>+</button>
            </div>
            <DisplayLists lists={ lists }/>
        </div>
    )
}

export default withRouter(MainPage);