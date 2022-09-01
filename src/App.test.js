import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json';
import RowTwo from "./Components/RowTwo";


test("RowTwo matches snapshot", ()=>{
  const wrapper = shallow(<RowTwo />);

  expect (toJSON (wrapper)).toMatchSnapshot();

})