import React, { useState } from "react";
import AddItemBar from "./components/AddItemBar";
import TodoItemList from "./components/TodoItemList";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  // Initial state for todos
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "Go to the supermarket", complete: false },
    { id: uuidv4(), name: "Call Alice", complete: false },
    { id: uuidv4(), name: "Ask Alice to call Bob", complete: false },
    { id: uuidv4(), name: "Do the dishes", complete: false },
    { id: uuidv4(), name: "Change car tyres", complete: false }
  ]);

  return (
    <div className="">
      <TodoItemList todos={todos} setTodos={setTodos} />
      <AddItemBar todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
