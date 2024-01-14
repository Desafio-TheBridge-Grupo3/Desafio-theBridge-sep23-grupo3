import React from "react";
import { shallow } from "enzyme";
import TRPC from "./TRPC";

describe("TRPC", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TRPC />);
    expect(wrapper).toMatchSnapshot();
  });
});
