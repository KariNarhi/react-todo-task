import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import AddItemBar from "./AddItemBar";
import TodoItem from "./TodoItem";

describe("<AddItemBar/> UI tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddItemBar />);
  });

  it("should render without problems", () => {
    expect(wrapper).not.toBeNull();
  });

  it("should have an input box", () => {
    expect(wrapper.find("input.rounded").length).toEqual(1);
  });

  it("should have a submit button", () => {
    expect(wrapper.find("button.btn-success").length).toEqual(1);
  });

  it("should have a submit button text", () => {
    expect(wrapper.find("button.btn-success").text()).toEqual("Submit");
  });
});

describe("<AddItemBar/> event test", () => {
  it("should submit new todo on submit", () => {
    const wrapper = mount(<App />);
    const itemBar = wrapper.find(AddItemBar);
    itemBar.find("input").simulate("change", { target: { value: "New Todo" } });
    itemBar.find("button").simulate("submit");
    const todoItem = wrapper.find(TodoItem);
    expect(
      todoItem.contains([<h5 className="col-sm text-center">New Todo</h5>])
    ).toBeTruthy();
  });
});
