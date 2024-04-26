import React from "react";
import "../../todo.css"

const ToDo = ({ todo, todos, setToDos }) => {
  return (
    <li>
      {todo.todo} 
     <div className="buttons"> <button
        onClick={() => {
          let arr = todos.filter((elem) => elem.id != todo.id);
          setToDos(arr)
        }}
      >
        Delete
      </button>
      <button>Edit</button></div>
    </li>
  );
};

export default ToDo;
