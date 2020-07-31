import React from 'react'
import ListItem from './ListItem'

const ListToDos = ({todos}) => {
    return(
        todos.map((task, index) => <ListItem key={index} task={task}/>
    )
    )
}

export default ListToDos;