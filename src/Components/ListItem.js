import React from 'react'

const ListItem = ({name, task, checkedHandler}) => {
    return(
        <li className="listItem">
            <input name={name} type="checkbox" onChange={checkedHandler}/>
            <p>{task}</p>
        </li>
    )
}

export default ListItem;