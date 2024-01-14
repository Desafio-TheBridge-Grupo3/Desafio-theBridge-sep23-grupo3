import React from "react";
import { shallow } from "enzyme";
import SEnergia from "./SEnergia";

describe("SEnergia", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SEnergia />);
    expect(wrapper).toMatchSnapshot();
  });
});
