import React from "react";
import {shallow} from 'enzyme';
import AddCategory from '../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    test('Debe de mostrarse correctamete', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de cambiar la caja de teto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        const e = {
            target: {
                value: value
            }
        };
        input.simulate('change', e);//Enviar 'e';
        //expect(input.state('inputValue')).toBe(value);
    });
    
});
