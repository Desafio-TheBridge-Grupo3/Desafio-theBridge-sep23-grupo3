import React from "react";
import { shallow } from "enzyme";
import TR from "./TR";

describe("TR", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TR />);
    expect(wrapper).toMatchSnapshot();
  });
});
