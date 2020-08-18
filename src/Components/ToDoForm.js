import React from 'react';

const ToDoForm = ({submitHandler, newTask, changeHandler}) => {
    return(
        <div className="formContainer">
            <form className="todoForm" onSubmit={submitHandler}>
                <button className="addTaskButton" type="submit" title="add new item">+</button>
                <input type="text" placeholder="List Item" value={newTask} onChange={changeHandler}/>
            </form>
        </div>
    )
}

export default ToDoForm;