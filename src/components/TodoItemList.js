import React from "react";
import TodoItem from "./TodoItem";

const TodoItemList = ({ todos = [], setTodos }) => {
  var items = [];

  // Create todo item list
  todos.forEach(todo => {
    items.push(
      <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
    );
  });

  return items;
};

export default TodoItemList;
