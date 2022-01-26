import React from "react";
import {shallow} from 'enzyme';
import AddCategory from '../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
    test('Debe de mostrarse correctamete', () => {
        const setCategories = () => {};
        const wrapper = shallow(<AddCategory setCategories={setCategories}/>);
        expect(wrapper).toMatchSnapshot();
    });
    
});
