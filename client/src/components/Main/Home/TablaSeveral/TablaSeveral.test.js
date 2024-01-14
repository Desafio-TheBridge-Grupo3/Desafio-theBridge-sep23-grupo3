import React from "react";
import { shallow } from "enzyme";
import TablaSeveral from "./TablaSeveral";

describe("TablaSeveral", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TablaSeveral />);
    expect(wrapper).toMatchSnapshot();
  });
});
