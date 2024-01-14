import React from "react";
import { shallow } from "enzyme";
import TablaCliente from "./TablaCliente";

describe("TablaCliente", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TablaCliente />);
    expect(wrapper).toMatchSnapshot();
  });
});
