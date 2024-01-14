import React from "react";
import { shallow } from "enzyme";
import Potencia from "./Potencia";

describe("Potencia", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Potencia />);
    expect(wrapper).toMatchSnapshot();
  });
});
