import React from 'react'
import "./App.css";


function TodoList(props) {
        return (
            <>
            <div className="todo_style">

            <i className='fa fa-times' onClick={() => {
                props.onSelect(props.id);
            }}
            />
            <li>{props.title}</li>
            </div>
        
            </>
        )
}

export default TodoList
