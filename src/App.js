import React, { useState } from "react";
import './App.css'
import TodoList from "./TodoList";


function App() {
  const [input, setInput] = useState("Baby Hello");
  const [Items, setItems] = useState([]);


  const inputEvent = (e) => {
    return setInput(e.target.value);
  }

  const todoList = () => {
    setItems((oldtodoItems) => {
      return [...oldtodoItems, input]
    })
    setInput('')
  }
  const deleteItems = (id) => {
    setItems((oldtodoItems) => {
      return oldtodoItems.filter((arrElement, index) => {
        return index !== id;
      })
    })

  }


  return (

    <div className="main">

    <div className="center">
      <br />
      <h1> ToDo List</h1>
      <br />

      <div className="inner">
        <input type="text" 
        value={input}
        onChange={inputEvent}
        placeholder="Add an item" />
        <button onClick={todoList}> Add </button>
      </div>
      <br />


      <div className="todo_style">
      <ol>

        {Items.map((todoItems, index) => {
          return <TodoList title={todoItems}
            key={index}
            id = {index}
            onSelect = {deleteItems}
          />
        })}
      </ol>
      </div>
    </div>


    </div>
  )
}
export default App
