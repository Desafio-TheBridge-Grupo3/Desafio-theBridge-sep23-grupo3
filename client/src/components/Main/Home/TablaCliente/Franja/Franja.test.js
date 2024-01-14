import React from "react";
import { shallow } from "enzyme";
import Franja from "./Franja";

describe("Franja", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Franja />);
    expect(wrapper).toMatchSnapshot();
  });
});
