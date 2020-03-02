import React from "react";
import { v4 as uuidv4 } from "uuid";
import { shallow, mount } from "enzyme";
import { spy } from "sinon";
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

// describe("<AddItemBar/> event tests", () => {
//   it("should submit a new todo on click", () => {
//     const wrapper = mount(<App />);
//     const itemBar = wrapper.find(AddItemBar);

//   });
// });
