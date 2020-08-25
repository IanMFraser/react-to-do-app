import React from 'react'

const ListItem = ({ name, task }) => {
    return(
        <li className="listItem" key={`ListItem-${name}`}>
            <input name={`ListItem-${name}`} type="checkbox" />
            <p>{task}</p>
        </li>
    )
}

export default ListItem;