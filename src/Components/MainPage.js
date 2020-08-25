import React from 'react';
import DisplayLists from './DisplayLists';
import '../App.css';
import { withRouter } from 'react-router-dom';

const MainPage = ({ toDoLists, newListHandler, deleteListHandler, editTitleHandler }) => {
    return(
        <div className="container">
            <div className="main-header">
                <h1>To Do List App</h1>
                <button onClick={newListHandler} title="add new list">+</button>
            </div>
            <DisplayLists lists={toDoLists} deleteListHandler={deleteListHandler} editTitleHandler={editTitleHandler}/>
        </div>
    )
}

export default withRouter(MainPage);