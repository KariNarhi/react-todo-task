import React from "react";
import ReactDOM from "react-dom";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

const todo = { id: uuidv4(), name: "Learn React", complete: false };

test("should render without problems", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TodoItem todo={todo} />, div);
});
