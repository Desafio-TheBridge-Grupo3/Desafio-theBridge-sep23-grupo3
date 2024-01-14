import React from "react";
import { shallow } from "enzyme";
import Metodo from "./Metodo";

describe("Metodo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Metodo />);
    expect(wrapper).toMatchSnapshot();
  });
});
