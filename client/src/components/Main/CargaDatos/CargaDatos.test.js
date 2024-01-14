import React from "react";
import { shallow } from "enzyme";
import CargaDatos from "./CargaDatos";

describe("CargaDatos", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CargaDatos />);
    expect(wrapper).toMatchSnapshot();
  });
});
