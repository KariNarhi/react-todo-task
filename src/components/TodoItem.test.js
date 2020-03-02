import React from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import { shallow } from "enzyme";

describe("<TodoItem />", () => {
  it("should render without problems", () => {
    const todo = { id: uuidv4(), name: "Learn React", complete: false };
    shallow(<TodoItem todo={todo} />);
  });

  it("shallow wrapper instance should be null", () => {
    const todo = { id: uuidv4(), name: "Learn React", complete: false };
    const wrapper = shallow(<TodoItem todo={todo} />);
    const instance = wrapper.instance();

    expect(instance).toEqual(null);
  });

  it("should have todo text", () => {
    const todo = { id: uuidv4(), name: "Learn React", complete: false };
    const wrapper = shallow(<TodoItem todo={todo} />);
    expect(wrapper.find("h5").length).toEqual(1);
  });

  it("should have a complete button", () => {
    const todo = { id: uuidv4(), name: "Learn React", complete: false };
    const wrapper = shallow(<TodoItem todo={todo} />);
    expect(wrapper.find("button.btn-info").length).toEqual(1);
  });

  it("should have a delete button", () => {
    const todo = { id: uuidv4(), name: "Learn React", complete: false };
    const wrapper = shallow(<TodoItem todo={todo} />);
    expect(wrapper.find("button.btn-danger").length).toEqual(1);
  });
});
