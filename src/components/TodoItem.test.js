import React from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import { shallow } from "enzyme";

describe("<TodoItem />", () => {
  const todo = { id: uuidv4(), name: "Learn React", complete: false };
  const todos = [];

  it("should render without problems", () => {
    shallow(<TodoItem todo={todo} />);
  });

  it("should change status", () => {
    const wrapper = shallow(
      <TodoItem todo={todo} todos={todos} setTodos={setTodos} />
    );
    wrapper.find("button.btn-info").simulate("click");
    expect(todo.complete).toBeTruthy();
  });
});
