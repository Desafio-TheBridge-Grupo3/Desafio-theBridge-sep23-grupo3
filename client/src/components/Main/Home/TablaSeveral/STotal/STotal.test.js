import React from "react";
import { shallow } from "enzyme";
import STotal from "./STotal";

describe("STotal", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<STotal />);
    expect(wrapper).toMatchSnapshot();
  });
});
