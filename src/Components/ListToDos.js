import React from 'react'
import ListItem from './ListItem'

const ListToDos = ({ todos, isCheckedHandler }) => {
  
    return(
        <div className="listToDos">
            <ul>
                { 
                todos.map((task, i) => 
                    <ListItem name={i} key={`task-${i}`} task={task.items} isCheckedHandler={isCheckedHandler} isChecked={task.isChecked}
                />) 
                }
            </ul>
        </div>
        
    )
}

export default ListToDos;