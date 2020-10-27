import React from 'react';
import { Link } from 'react-router-dom';  
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DisplayLists = ({ lists, deleteListHandler, editTitleHandler }) => {
    
    //store the deleteListHandler in a function
    const deleteListPage = (id) => {
        deleteListHandler(id)
    }

    return(
        <div className="listDisplay">
            <ul>
                { 
                Array.from(lists).map((list, i) => {
                    console.log(typeof(list.title))
                    return <li className={`linkItem`} key={i}>
                        <Link to={{
                                    pathname: `/todo/${list.id}`,
                                    state: {id: list.id, title: list.title}
                                }}>
                            {list.title}
                        </Link> 
                    <div className={`editButtons`}>
                        <button
                            onClick={() => {editTitleHandler(list.id, list.title)}}
                            title="edit list">
                            <FontAwesomeIcon icon={faPencilAlt}/>
                         </button>
                        <button
                            onClick={() => {deleteListPage(list.id)}}
                            title="delete list">
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </div>
                    </li>
                    }) 
                }
            </ul>
        </div>
    )
}

export default DisplayLists;