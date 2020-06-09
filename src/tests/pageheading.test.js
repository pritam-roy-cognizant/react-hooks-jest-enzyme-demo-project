import React  from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import findByTestAttr from "../Utils/testutils"
import PageHeading from '../components/PageHeading.js';


Enzyme.configure({ adapter : new EnzymeAdapter()});

const setUp = (props={}) => {
    const component  = shallow(<PageHeading {...props}/>);
    return component
};

describe("Page Heading Component", ()=> {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it('renders without error', () => {
        const headingComponent = findByTestAttr(component, 'component-heading');
        expect(headingComponent.length).toBe(1);
      });
})