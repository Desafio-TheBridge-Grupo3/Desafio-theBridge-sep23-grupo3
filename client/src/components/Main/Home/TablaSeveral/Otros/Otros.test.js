import React from "react";
import { shallow } from "enzyme";
import Otros from "./Otros";

describe("Otros", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Otros />);
    expect(wrapper).toMatchSnapshot();
  });
});
