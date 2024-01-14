import React from "react";
import { shallow } from "enzyme";
import SPotencia from "./SPotencia";

describe("SPotencia", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SPotencia />);
    expect(wrapper).toMatchSnapshot();
  });
});
