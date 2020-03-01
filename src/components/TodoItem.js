import React from "react";

const TodoItem = ({ todo, todos, setTodos }) => {
  // Todo item color and text changes based on todo.complete state
  var color = todo.complete === true ? "lightgreen" : "pink";
  var text = todo.complete === true ? "Complete" : "Incomplete";

  // Change completed status for clicked item
  const changeStatus = id => {
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
  const deleteItem = id => {
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
    <div className="wrapper" style={{ backgroundColor: color }}>
      <h3>{todo.name}</h3>
      <button className="btn" onClick={() => changeStatus(todo.id)}>
        {text}
      </button>
      <button className="btn" onClick={() => deleteItem(todo.id)}>
        Remove from list
      </button>
    </div>
  );
};

export default TodoItem;
