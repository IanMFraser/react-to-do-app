import React from 'react'
import ListItem from './ListItem'

const ListToDos = ({todos, checkedHandler}) => {
    return(
        todos.map((task) => <ListItem name={task.id} key={task.id} task={task.items} checkedHandler={checkedHandler} />)
    )
}

export default ListToDos;