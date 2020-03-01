import React from "react";

const TodoItem = ({ todo, changeStatus, deleteItem }) => {
  // Todo item color and text changes based on todo.complete state
  var color = todo.complete === true ? "lightgreen" : "pink";
  var text = todo.complete === true ? "Complete" : "Incomplete";

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
