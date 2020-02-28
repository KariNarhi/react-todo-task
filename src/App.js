import React, { useState } from "react";
import Bar from "./components/Bar";
import TodoItemList from "./components/TodoItemList";
import "./App.css";

const App = () => {
  // Initial state Hooks
  const [newTodoName, setNewTodoName] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, name: "Go to the supermarket", complete: false },
    { id: 2, name: "Call Alice", complete: false },
    { id: 3, name: "Ask Alice to call Bob", complete: false },
    { id: 4, name: "Do the dishes", complete: false },
    { id: 5, name: "Change car tyres", complete: false }
  ]);

  // Generate ID for todo items
  const generateNewId = () => {
    return todos.length + 1;
  };

  // Add new todo item on submit
  const onSubmit = event => {
    event.preventDefault();

    var newTodos = todos.slice();
    newTodos.push({
      id: generateNewId(),
      name: newTodoName,
      complete: false
    });

    setTodos(newTodos);
    setNewTodoName("");
  };

  // Change completed status for clicked item
  const onClick = id => {
    var todoItems = todos.slice();
    for (let i = 0; i < todos.length; i++) {
      if (todoItems[i].id === id) {
        var newComplete = !todoItems[i].complete;
        todoItems[i].complete = newComplete;
      }
    }

    setTodos(todoItems);
  };

  // Set name for the new todo item
  const onChange = event => {
    setNewTodoName(event.target.value);
  };

  // Remove todo item
  const onRemoveClick = id => {
    //implement this logic
    console.log("Remove Item!");
  };

  return (
    <div className="">
      <TodoItemList
        todos={todos}
        onClick={onClick}
        onRemoveClick={onRemoveClick}
      />
      <Bar
        onSubmit={onSubmit}
        newTodoName={newTodoName}
        onInputChange={onChange}
      />
    </div>
  );
};

export default App;
