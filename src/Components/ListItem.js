import React from 'react'

const ListItem = ({task}) => {
    return(
        <div className="listItem">
            <input type="checkbox"/>
            <p>{task}</p>
        </div>
    )
}

export default ListItem;