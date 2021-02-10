// import logo from './logo.svg';
import { useState } from "react";

import "./App.css";
import Todo from "./Components/Todo";

function App() {
  const [todos, setTodos] = useState([
    { item: "Write your code in the text box above", completed: false },
    { item: "Click on add Todo", completed: false },
    { item: "Click on complete to complete your todo", completed: false },
    { item: "Click on delete to delete your todo", completed: false },
    {
      item: "Click on delete all to delete all of your todos",
      completed: false,
    },
  ]); //sample todo items.  these will need to be changed in your app.  Just filler todos, although they are quite important!

  const [todoInputValue, setValue] = useState("");

  function removeItemOfIndex(indexValue) {
    let oldTodos = [...todos];
    let newTodos = oldTodos.filter((todoObj, index) => index !== indexValue);
    setTodos(newTodos);
  }

  function addItemInArray() {
    let newTodos = [...todos];
    newTodos.push({ item: todoInputValue, completed: false });
    setTodos(newTodos);
  }

  function completeTodoInArray(indexValue) {
    let newTodos = [...todos];
    newTodos[indexValue].completed = true;
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className="inputControl">
            <input
              type="text"
              placeholder="Add a todo"
              value={todoInputValue}
              onChange={(e) => setValue(e.target.value)}
            />
            <button id="submit" onClick={addItemInArray}>
              Add Todo
            </button>
            <button id="remove_all" onClick={() => setTodos([])}>
              Remove All
            </button>
          </div>
          <div className="todoContainer">
            {todos.map((todo, index) => (
              <Todo
                completed={todo.completed}
                item={todo.item}
                key={todo.item}
                removeSelf={() => removeItemOfIndex(index)}
                completeSelf={() => completeTodoInArray(index)}
              />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
