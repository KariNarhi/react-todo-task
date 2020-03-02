import React from "react";
import TodoItemList from "../TodoItemList";
import { v4 as uuidv4 } from "uuid";
import { shallow } from "enzyme";
import TodoItem from "../TodoItem";

describe("<TodoItemList />", () => {
  it("should render without problems", () => {
    const todos = [
      { id: uuidv4(), name: "Learn React", complete: false },
      { id: uuidv4(), name: "Graduate from school", complete: false }
    ];
    shallow(<TodoItemList todos={todos} />);
  });

  it("should have 2 TodoItem components", () => {
    const todos = [
      { id: uuidv4(), name: "Learn React", complete: false },
      { id: uuidv4(), name: "Graduate from school", complete: false }
    ];
    const wrapper = shallow(<TodoItemList todos={todos} />);
    expect(wrapper.find(TodoItem).length).toEqual(2);
  });
});
