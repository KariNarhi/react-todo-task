import React, { useState } from "react";
import Bar from "./components/Bar";
import Hello from "./components/Hello";
import "./App.css";

const App = () => {
  const [newTodoName, setNewTodoName] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, name: "Go to the supermarket", complete: false },
    { id: 2, name: "Call Alice", complete: false },
    { id: 3, name: "Ask Alice to call Bob", complete: false },
    { id: 4, name: "Do the dishes", complete: false },
    { id: 5, name: "Change car tyres", complete: false }
  ]);

  const generateNewId = () => {
    return todos.length + 1;
  };

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

  const onChange = event => {
    setNewTodoName(event.target.value);
  };

  const onRemoveClick = id => {
    //implement this logic
    console.log("Remove Item!");
  };

  const todoItems = () => {
    var retVal = [];

    for (let i = 0; i < todos.length; i++) {
      var todo = todos[i];
      retVal.push(
        <Hello
          key={todo.id}
          todo={todo}
          onClick={onClick}
          onRemoveClick={onRemoveClick}
        />
      );
    }
    return retVal;
  };

  return (
    <div className="">
      {todoItems()}
      <Bar
        onSubmit={onSubmit}
        newTodoName={newTodoName}
        onInputChange={onChange}
      />
    </div>
  );
};

export default App;
