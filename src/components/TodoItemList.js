import React from "react";
import TodoItem from "./TodoItem";

const TodoItemList = ({ todos, setTodos }) => {
  var items = [];

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

  // Create todo item list
  todos.forEach(todo => {
    items.push(
      <TodoItem
        key={todo.id}
        todo={todo}
        onClick={onClick}
        onRemoveClick={onRemoveClick}
      />
    );
  });

  return items;
};

export default TodoItemList;
