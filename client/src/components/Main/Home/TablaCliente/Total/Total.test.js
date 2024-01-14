import React from "react";
import { shallow } from "enzyme";
import Total from "./Total";

describe("Total", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Total />);
    expect(wrapper).toMatchSnapshot();
  });
});
