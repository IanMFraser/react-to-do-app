import React from 'react'

const ListItem = ({ name, task, isCheckedHandler, isChecked }) => {
   
    return(

        <li className=" listItem" key={`ListItem-${name}`}>
            <input name={name} type="checkbox" onChange={isCheckedHandler} checked={isChecked} />
            <p>{task}</p>
        </li>
    )
}

export default ListItem;