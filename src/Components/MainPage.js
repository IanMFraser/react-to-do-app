import React from 'react';
import DisplayLists from './DisplayLists';
import '../App.css';
import { withRouter } from 'react-router-dom';

const MainPage = ({ lists, newListHandler, deleteListHandler }) => {

    return(
        <div className="container">
            <div className="main-header">
                <h1>To Do List App</h1>
                <button onClick={ newListHandler } title="add new list">+</button>
            </div>
            <DisplayLists lists={ lists } deleteListHandler={deleteListHandler} />
        </div>
    )
}

export default withRouter(MainPage);