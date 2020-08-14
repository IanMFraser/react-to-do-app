import React from 'react';
import DisplayLists from './DisplayLists';
import '../App.css';

const MainPage = ({lists}) => {
    
    return(
        <div className="container">
            <h1>To Do</h1>
            <button>+</button>
            <DisplayLists lists={lists}/>
        </div>
    )
}

export default MainPage;