import React from "react";
import ReactDOM from "react-dom";
import TodoItemList from "./TodoItemList";

test("should render without problems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TodoItemList />, div);
});
