import React, { useState } from "react";
import AddItemBar from "./components/AddItemBar";
import TodoItemList from "./components/TodoItemList";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  // Initial state for todos
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "Learn React", complete: false },
    { id: uuidv4(), name: "Graduate from school", complete: false },
    { id: uuidv4(), name: "Get a cool web development job", complete: false },
    { id: uuidv4(), name: "Learn more new technologies", complete: false },
    { id: uuidv4(), name: "Enjoy working life", complete: false }
  ]);

  return (
    <div className="container appbox">
      <TodoItemList todos={todos} setTodos={setTodos} />
      <AddItemBar todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
