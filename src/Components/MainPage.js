import React from 'react';
import DisplayLists from './DisplayLists';
import '../App.css';

const MainPage = ({lists}) => {
    
    return(
        <div className="container">
            <h1>To Do <button>+</button> </h1>
            
            <DisplayLists lists={lists}/>
        </div>
    )
}

export default MainPage;