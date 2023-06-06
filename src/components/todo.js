import React, { useState, useEffect, useRef } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleAdd = () => {
    setTodo([...todo, inputValue]);
  };

  const handleDelete = (id) => {
    const updatedtodo = todo.filter((_, i) => i !== id);
    setTodo(updatedtodo);
  };

  return (
    <>
      <div>
        <h1> TodoList </h1>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue()}
          ref={inputRef}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <ul>
          {todo.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
