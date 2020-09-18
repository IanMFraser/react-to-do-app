import React from 'react'
import ListItem from './ListItem'

const ListToDos = ({ todos, isCheckedHandler }) => {
  
    return(
        <div className="listToDos">
            <ul>
                { 
                todos.map((task, id) => 
                        <ListItem name={id} key={`task-${id}`} task={task.items} isCheckedHandler={(e) => {isCheckedHandler(e, task.id)}} isChecked={task.isChecked} />
                    )
                }
            </ul>
        </div>
        
    )
}

export default ListToDos;