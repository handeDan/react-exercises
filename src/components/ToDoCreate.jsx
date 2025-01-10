import React, { useState } from "react";
import "../css/App.css";

function ToDoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const clearInput = () => {
    setNewTodo("");
  };

  const createTodo = () => {
    if (!newTodo) return;
    console.log(newTodo);
    const request = {
      id: Math.floor(Math.random() * 999999999),
      content: newTodo,
    };
    onCreateTodo(request);
    clearInput();
  };

  return (
    <div className="todo-create">
      <input
        type="text"
        placeholder="To-do giriniz"
        className="todo-input"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={createTodo} className="todo-button">
        To Do Oluştur
      </button>
    </div>
  );
}

export default ToDoCreate;
