import React from "react";
import { shallow } from "enzyme";
import COtros from "./COtros";

describe("COtros", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<COtros />);
    expect(wrapper).toMatchSnapshot();
  });
});
