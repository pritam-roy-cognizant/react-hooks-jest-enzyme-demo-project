import React, { Component } from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import findByTestAttr from "../Utils/testutils"
import AddTransction from '../components/AddTransction.js';

Enzyme.configure({ adapter : new EnzymeAdapter()});

const setUp = (text='Salary') => {
  const component = shallow(<AddTransction  Text={text} Amount={1000}/>);
  return component;
}

describe("state control input field",()=>{
    let component;
    let mockFunction;
    beforeEach(() => {
      mockFunction = jest.fn();
      React.useState = jest.fn(() => ["",mockFunction]);
      component = setUp();
    });

    it("state update with value input box upon change", ()=>{
        const inputBox = findByTestAttr(component,'component-addtransaction-input');
        const mockEvent = {target : {value: 'EMI'}};
        inputBox.simulate("change",mockEvent);
        expect(mockFunction).toHaveBeenCalledWith('EMI');
        
    })

    it("state update for amount", ()=>{
      const inputBox = findByTestAttr(component,'component-addtransaction-amount');
      const mockEvent = {target : {value: 2000}};
      inputBox.simulate("change",mockEvent);
      expect(mockFunction).toHaveBeenCalledWith(2000);
      
  })
})
