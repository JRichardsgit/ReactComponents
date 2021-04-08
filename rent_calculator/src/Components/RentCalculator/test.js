import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import RentCalculator from './RentCalculator';

describe('RentCalculator',()=>{

    it('renders without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<RentCalculator/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    test('has a valid snapshot', ()=>{
        const component = renderer.create(
            <RentCalculator/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});