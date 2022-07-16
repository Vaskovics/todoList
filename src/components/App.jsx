import React from "react";
import TodoItem from "./TodoItem";

function App() {
  const [inputText, setText] = React.useState("");
  const [todos, setTodo] = React.useState([]);

  function handleChange(event) {
    const newText = event.target.value;
    setText(newText);
  }

  function additem() {
    setTodo((prevItem) => {
      return [...prevItem, inputText];
    });
    setText("");
  }

  function deleteItem(id) {
    setTodo((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={additem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map((item, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                text={item}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
