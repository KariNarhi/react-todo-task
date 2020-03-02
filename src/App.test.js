import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import TodoItemList from "./components/TodoItemList";
import AddItemBar from "./components/AddItemBar";

describe("<App/>", () => {
  it("should render without problems", () => {
    shallow(<App />);
  });

  it("should have a TodoItemList component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(TodoItemList).length).toEqual(1);
  });

  it("should have an AddItemBar component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(AddItemBar).length).toEqual(1);
  });
});
