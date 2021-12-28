import { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);


  const inputEvent = (e) => {
    setInputList(e.target.value);
  }


  const todoList = () => {
    setItems( (oldtodoItems) => {
      return [...oldtodoItems, inputList]
    })
    setInputList('');
  }
  const deleteItems = (id) => {
    setItems((oldtodoItems) => {
      return oldtodoItems.filter((arrElements, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
    {/* Main Container */}
      <div className="main">
    {/* ToDo Container */}
        <div className="center">
          <br />
          <h1> ToDo's </h1>
          <br />
    {/* Input and Button Container */}
          <div className="inner">
            <input type="text" placeholder="Add an item"
              value={inputList}
             onChange={inputEvent}/>
            <button onClick={todoList} onkey="return{todoList}"> Add </button>
          </div>
          <br />

    {/* ToDo's List Container*/}
          <ol>
            {/* <li>{inputList}</li> */}

         {Items.map((todoItems, index) => {
           return <TodoList title = {todoItems} 
             key = {index}
             id = {index}
             onSelect = {deleteItems}
           />
          })}


          </ol>

        </div>
      </div>
    </>
  );
}

export default App;
