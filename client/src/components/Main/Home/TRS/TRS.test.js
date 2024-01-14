import React from "react";
import { shallow } from "enzyme";
import TRS from "./TRS";

describe("TRS", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TRS />);
    expect(wrapper).toMatchSnapshot();
  });
});
