import React from "react";

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
          {todos.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
