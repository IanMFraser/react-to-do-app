import React from 'react';
import { Link } from 'react-router-dom';  
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DisplayLists = ({ lists, deleteListHandler, editTitleHandler }) => {

    const deleteListPage = (title) => {
        deleteListHandler(title)
    }

    return(
        <div className="listDisplay">
            <ul>
                { 
                lists.map((list) => {
                    return <li key={list.title}>
                        <Link to={{
                                    pathname: `/todo/${list.id}`,
                                    state: {id:list.id, lists: list}
                                }}>
                            {list.title}
                        </Link> 
                    <button 
                        onClick={() => {deleteListPage(list.title)}} 
                        title="delete list">
                        <FontAwesomeIcon icon={faTrash}/>
                    </button> 
                    <button 
                        onClick={() => {editTitleHandler(list.id, list.title)}} 
                        title="delete list">
                        <FontAwesomeIcon icon={faPencilAlt}/>
                    </button> 
                    </li>
                    }) 
                }
            </ul>
        </div>
    )
}

export default DisplayLists;