import React from 'react';
import { useHistory } from 'react-router-dom';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TitleBar = ({newTitle, titleHandler, deleteFormHandler}) => {
    let history = useHistory();
    return( 
        <div className="title">
            <button onClick={history.goBack} title="back to home"><FontAwesomeIcon icon={faArrowLeft}/></button>
            <input type="text" placeholder="To Do" value={newTitle} onChange={titleHandler}/>
            <button onClick={deleteFormHandler} title="delete list"><FontAwesomeIcon icon={faTrash}/></button>
        </div>
    )
}

export default TitleBar;