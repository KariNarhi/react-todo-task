import React from "react";
import ReactDOM from "react-dom";
import TodoItemList from "./TodoItemList";

test("should render without problems", () => {
  const todos = [];
  const div = document.createElement("div");
  ReactDOM.render(<TodoItemList todos={todos} />, div);
});
