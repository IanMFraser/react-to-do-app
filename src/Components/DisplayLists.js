import React from 'react';
import { Link } from 'react-router-dom';  
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DisplayLists = ({ lists, deleteListHandler }) => {
    
    return(
        <div className="listDisplay">
            <ul>
                { lists.map((list) => <li key={ list["title"] } ><Link to={ `/${ list["title"] }` }>{ list["title"] }</Link> <button onClick={ () => {deleteListHandler(list["title"])} } title="delete list"><FontAwesomeIcon icon={faTrash}/></button> </li>) }
            </ul>
        </div>
    )
}

export default DisplayLists;