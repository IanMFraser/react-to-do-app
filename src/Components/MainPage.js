import React from 'react';
import DisplayLists from './DisplayLists';
import '../App.css';

const MainPage = ({ lists, newListHandler, deleteListHandler }) => {

    return(
        <div className="container">
            <div className="main-header">
                <h1>To Do</h1>
                <button onClick={ newListHandler }>+</button>
            </div>
            <DisplayLists lists={ lists } deleteListHandler={deleteListHandler} />
        </div>
    )
}

export default MainPage;