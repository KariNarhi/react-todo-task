import React from "react";
import TodoItem from "./TodoItem";

const TodoItemList = ({ todos, onClick, onRemoveClick }) => {
  var items = [];

  // Create todo item list
  for (let i = 0; i < todos.length; i++) {
    var todo = todos[i];
    items.push(
      <TodoItem
        key={todo.id}
        todo={todo}
        onClick={onClick}
        onRemoveClick={onRemoveClick}
      />
    );
  }
  return items;
};

export default TodoItemList;
