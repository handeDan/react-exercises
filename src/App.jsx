import { useState } from "react";

import "../src/css/App.css";
import ToDoCreate from "./components/ToDoCreate";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    const extractedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos([...extractedTodos]);
  };

  const addTodo = (newTodo) => {
    const addedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    });
    setTodos([...addedTodos]);
  };
  console.log(todos);

  return (
    <div className="App">
      <div className="main">
        <ToDoCreate onCreateTodo={createTodo} />
        <ToDoList todos={todos} onRemoveTodo={removeTodo} onAddTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
