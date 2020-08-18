import React from 'react';
import { Link } from 'react-router-dom';  

const DisplayLists = ({ lists }) => {
    
    return(
        <div>
            <ul>
                { lists.map((list) => <li key={ list["title"] } ><Link to={ `/${ list["title"] }` }>{ list["title"] }</Link></li>) }
            </ul>
        </div>
    )
}

export default DisplayLists;