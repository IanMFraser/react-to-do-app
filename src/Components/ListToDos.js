import React from 'react'
import ListItem from './ListItem'

const ListToDos = ({todos, checkedHandler}) => {
    return(
        <div className="listToDos">
            <ul>
                {todos.map((task, i) => <ListItem name={i} key={task.id} task={task.items} checkedHandler={checkedHandler} />)}
            </ul>
        </div>
        
    )
}

export default ListToDos;