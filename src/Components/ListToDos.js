import React from 'react'
import ListItem from './ListItem'

const ListToDos = ({ todos }) => {
    return(
        <div className="listToDos">
            <ul>
                { todos.map((task, i) => <ListItem name={ i } key={ `task-${i}` } task={ task.items } />) }
            </ul>
        </div>
        
    )
}

export default ListToDos;