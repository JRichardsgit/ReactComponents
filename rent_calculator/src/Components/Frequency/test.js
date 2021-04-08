import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Frequency from "./Frequency";
describe('Frequency',()=>{
    it('renders without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<Frequency>Max</Frequency>,div);
        ReactDOM.unmountComponentAtNode(div);
    });
    test('has a valid snapshot',()=>{
        const component = renderer.create(
            <Frequency>Max</Frequency>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});