import React, { useState } from "react";
import AddItemBar from "./components/AddItemBar";
import TodoItemList from "./components/TodoItemList";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  // Initial state Hooks
  const [newTodoName, setNewTodoName] = useState("");
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "Go to the supermarket", complete: false },
    { id: uuidv4(), name: "Call Alice", complete: false },
    { id: uuidv4(), name: "Ask Alice to call Bob", complete: false },
    { id: uuidv4(), name: "Do the dishes", complete: false },
    { id: uuidv4(), name: "Change car tyres", complete: false }
  ]);

  // Generate ID for todo items
  const generateNewId = () => {
    const newID = uuidv4();
    return newID;
  };

  // Add new todo item on submit
  const onSubmit = event => {
    event.preventDefault();

    // Add item only if input is not empty
    if (newTodoName !== "") {
      var newTodos = todos.slice();
      newTodos.push({
        id: generateNewId(),
        name: newTodoName,
        complete: false
      });

      setTodos(newTodos);
      setNewTodoName("");
    }
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
    const newTodos = [...todos];

    var removeIndex = newTodos
      .map(todo => {
        return todo.id;
      })
      .indexOf(id);

    newTodos.splice(removeIndex, 1);

    setTodos(newTodos);
  };

  return (
    <div className="">
      <TodoItemList
        todos={todos}
        onClick={onClick}
        onRemoveClick={onRemoveClick}
      />
      <AddItemBar
        onSubmit={onSubmit}
        newTodoName={newTodoName}
        onInputChange={onChange}
      />
    </div>
  );
};

export default App;
