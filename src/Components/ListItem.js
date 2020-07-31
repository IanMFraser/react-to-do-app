import React from 'react'

const ListItem = ({name, task, checkedHandler}) => {
    return(
        <div className="listItem">
            <input name={name} type="checkbox" onChange={checkedHandler}/>
            <p>{task}</p>
        </div>
    )
}

export default ListItem;