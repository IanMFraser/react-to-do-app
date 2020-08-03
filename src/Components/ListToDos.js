import React from 'react'
import ListItem from './ListItem'

const ListToDos = ({todos, checkedHandler}) => {
    return(
        <div class="listToDos">
            <ul>
                {todos.map((task) => <ListItem name={task.id} key={task.id} task={task.items} checkedHandler={checkedHandler} />)}
            </ul>
        </div>
        
    )
}

export default ListToDos;