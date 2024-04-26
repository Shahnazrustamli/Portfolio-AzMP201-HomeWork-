import React from "react";
import ToDo from "./ToDo";
import "../../todo.css";
const Footer = ({ todos, setToDos }) => {
  return (
    <div className="ul">
      <ul>
        {todos.map((elem, i) => {
          return <ToDo key={i} todo={elem} todos={todos} setToDos={setToDos} />;
        })}
      </ul>
    </div>
  );
};

export default Footer;
