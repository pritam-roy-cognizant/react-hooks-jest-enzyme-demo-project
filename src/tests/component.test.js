import React, { Component } from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import findByTestAttr from "../Utils/testutils"
import Home from '../../pages/index.js';

Enzyme.configure({ adapter : new EnzymeAdapter()});

const setUp = (props={}) => {
  const component = shallow(<Home  {...props}/>);
  return component;
}



describe("Index Page Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('renders without error', () => {
    const homeComponent = findByTestAttr(component, 'component-home');
    expect(homeComponent.length).toBe(1);
  });

  it('renders with snapshot', () => {
    expect(component.html()).toMatchSnapshot();
  });

})

