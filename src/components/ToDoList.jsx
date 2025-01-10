import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos, onRemoveTodo, onAddTodo }) {
  return (
    <div style={{ width: "100%", margin: "50px" }}>
      {todos &&
        todos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            onRemovingTodo={onRemoveTodo}
            onAddTodo={onAddTodo}
          />
        ))}
    </div>
  );
}

export default ToDoList;
