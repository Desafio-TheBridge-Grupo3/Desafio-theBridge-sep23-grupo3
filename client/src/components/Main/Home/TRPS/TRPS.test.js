import React from "react";
import { shallow } from "enzyme";
import TRPS from "./TRPS";

describe("TRPS", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TRPS />);
    expect(wrapper).toMatchSnapshot();
  });
});
