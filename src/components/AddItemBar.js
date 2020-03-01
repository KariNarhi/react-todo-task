import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddItemBar = ({ todos, setTodos }) => {
  const [newTodoName, setNewTodoName] = useState("");

  // Add new todo item on submit
  const onSubmit = event => {
    event.preventDefault();

    // Add item only if input is not empty
    if (newTodoName !== "") {
      var newTodos = todos.slice();
      newTodos.push({
        id: uuidv4(),
        name: newTodoName,
        complete: false
      });

      setTodos(newTodos);
      setNewTodoName("");
    }
  };

  // Set name for the new todo item
  const onChange = event => {
    setNewTodoName(event.target.value);
  };

  return (
    <form
      className="row mt-2 mr-1 ml-1 mb-1"
      style={{ gridTemplateColumns: "7fr 2fr" }}
      onSubmit={onSubmit}
    >
      <input
        className="col rounded"
        placeholder="Add new todo"
        value={newTodoName}
        onChange={onChange}
      />
      <button className="btn btn-success col-3" type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default AddItemBar;
