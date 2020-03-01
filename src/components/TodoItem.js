import React from "react";

const TodoItem = ({ todo, todos, setTodos }) => {
  // Todo item color and text changes based on todo.complete state
  var color = todo.complete === true ? "lightgreen" : "bisque";
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
    <div
      className="row mt-2 mr-1 ml-1 todoItem"
      style={{ backgroundColor: color }}
    >
      <h5 className="col-sm text-center">{todo.name}</h5>
      <button
        className="btn btn-info col-sm-3"
        onClick={() => changeStatus(todo.id)}
      >
        {text}
      </button>
      <button
        className="btn btn-danger col-sm-2"
        onClick={() => deleteItem(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
