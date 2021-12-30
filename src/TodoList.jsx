import React, { useState } from 'react'
import './App.css'

function TodoList(props) {
  const [style, setStyle] = useState({
      textDecoration: 'none'
  })

  const checkItems = () => {
      setStyle({
        textDecoration: 'line-through'

          
      })
  }


    return (
        <>

        <div className="todo_style">

        <i className='fa fa-check' onClick={checkItems} />
        <i className='fa fa-times' 
        onClick={() => {

        props.onSelect(props.id);
        }} 
            
        />

        <li style={style}>{props.title}</li>

        </div>
            
        </>
    )
}

export default TodoList
