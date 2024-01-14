import React from "react";
import { shallow } from "enzyme";
import Energia from "./Energia";

describe("Energia", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Energia />);
    expect(wrapper).toMatchSnapshot();
  });
});
