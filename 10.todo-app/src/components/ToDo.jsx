import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../css/App.css";
import { FaCheck } from "react-icons/fa";

function ToDo({ todo, onRemovingTodo, onAddTodo }) {
  const { id, content } = todo; //object destructing
  const [editable, setEditable] = useState(false);
  const [updateToDo, setUpdateToDo] = useState(content);

  const removeTodo = () => {
    onRemovingTodo(id);
  };

  const addTodo = () => {
    const request = {
      id: id,
      content: updateToDo,
    };
    onAddTodo(request);
    setEditable(false);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid lightgray",
        padding: "5px",
        marginTop: "10px",
      }}
    >
      <div>
        {editable ? (
          <input
            type="text"
            value={updateToDo}
            onChange={(e) => setUpdateToDo(e.target.value)}
            className="todo-input"
            style={{ width: "350px" }}
          />
        ) : (
          content
        )}
      </div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
        {editable ? (
          <FaCheck className="todo-icons" onClick={addTodo} />
        ) : (
          <FaEdit className="todo-icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

export default ToDo;
