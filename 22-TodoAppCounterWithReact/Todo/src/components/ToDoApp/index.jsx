import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../todo.css"

const ToDoApp = () => {
  const [todos, setToDos] = useState([]);
  return (
    <div>
      <h1>ToDoApp</h1>
      <Header todos={todos} setToDos={setToDos} />
      <Footer todos={todos} setToDos={setToDos} />
    </div>
  );
};

export default ToDoApp;
