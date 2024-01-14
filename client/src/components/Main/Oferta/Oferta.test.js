import React from "react";
import { shallow } from "enzyme";
import Oferta from "./Oferta";

describe("Oferta", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Oferta />);
    expect(wrapper).toMatchSnapshot();
  });
});
