import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChoreTable from './ChoreTable';

describe('ChoreTable',()=>{
    it('renders without chrashing', ()=>{
       const div = document.createElement('div');
        ReactDOM.render(<ChoreTable/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    test('has a valid snapshot', ()=>{
        const component = renderer.create(
            <ChoreTable/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});