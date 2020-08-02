import React from 'react';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleBar = ({newTitle, titleHandler, deleteFormHandler}) => {
    return( 
        <div className="title">
            <input type="text" placeholder="To Do" value={newTitle} onChange={titleHandler}/>
            <button onClick={deleteFormHandler}><FontAwesomeIcon icon={faTrash}/></button>
        </div>
    )
}

export default TitleBar;