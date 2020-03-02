import React from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import { shallow, mount } from "enzyme";
import { spy } from "sinon";
import App from "../App";

describe("<TodoItem /> UI tests", () => {
  let todo, todos, wrapper, funcSpy;

  beforeEach(() => {
    todo = { id: uuidv4(), name: "Learn React", complete: false };
    todos = [
      { id: uuidv4(), name: "Learn React", complete: false },
      { id: uuidv4(), name: "Graduate from school", complete: false }
    ];
    funcSpy = spy();
    wrapper = shallow(
      <TodoItem todo={todo} todos={todos} setTodos={funcSpy} />
    );
  });

  it("should render without problems", () => {
    expect(wrapper).not.toBeNull();
  });

  it("shallow wrapper instance should be null", () => {
    const instance = wrapper.instance();
    expect(instance).toEqual(null);
  });

  it("should have todo text", () => {
    expect(wrapper.find("h5").length).toEqual(1);
  });

  it("should have a complete button", () => {
    expect(wrapper.find("button.btn-info").length).toEqual(1);
  });

  it("should have a delete button", () => {
    expect(wrapper.find("button.btn-danger").length).toEqual(1);
  });
});

describe("<TodoItem /> click event tests", () => {
  it("should change complete status when clicked", () => {
    const wrapper = mount(<App />);
    const item = wrapper.find(TodoItem);

    // from Incomplete to Complete
    item
      .find("button.btn-info")
      .at(0)
      .simulate("click");
    expect(
      wrapper
        .find("button.btn-info")
        .at(0)
        .text()
    ).toEqual("Complete");

    // from Complete to Incomplete
    item
      .find("button.btn-info")
      .at(0)
      .simulate("click");
    expect(
      wrapper
        .find("button.btn-info")
        .at(0)
        .text()
    ).toEqual("Incomplete");
  });

  it("should delete item 'Learn React' when clicked", () => {
    const wrapper = mount(<App />);
    const item = wrapper.find(TodoItem);
    item
      .find("button.btn-danger")
      .at(0) // 0 index which is the first item AKA "Learn React"
      .simulate("click");
    expect(wrapper.contains([<h5>Learn React</h5>])).toBeFalsy();
  });
});
