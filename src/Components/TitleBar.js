import React from 'react';
import { useHistory } from 'react-router-dom';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TitleBar = ({ title, deleteFormHandler }) => {
    //history is used to return to home page when arrow button is pressed
    let history = useHistory();
    
    return( 
        <div className="title">
            <button onClick={history.goBack} title="back to home"><FontAwesomeIcon icon={faArrowLeft}/></button>
            <h1>{title}</h1>
            <button onClick={deleteFormHandler} title="delete list"><FontAwesomeIcon icon={faTrash}/></button>
        </div>
    )
}

export default TitleBar;