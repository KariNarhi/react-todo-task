import React from "react";
import { shallow } from "enzyme";
import AddItemBar from "./AddItemBar";

describe("<AddItemBar/>", () => {
  it("should render without problems", () => {
    shallow(<AddItemBar />);
  });

  it("should have an input box", () => {
    const wrapper = shallow(<AddItemBar />);
    expect(wrapper.find("input.rounded").length).toEqual(1);
  });

  it("should have a submit button", () => {
    const wrapper = shallow(<AddItemBar />);
    expect(wrapper.find("button.btn-success").length).toEqual(1);
  });
});
