import React from "react";
import {shallow} from 'enzyme';
import AddCategory from '../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

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
    test('No debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault: () => {}});
        expect(setCategories).not.toHaveBeenCalled();
    });
    test('Debe de postear la informacion con submit', () => {
        const input = wrapper.find('input');
        const e = {
            target: {
                value: 'Lego'
            }
        };
        input.simulate('change', e);
        wrapper.find('form').simulate('submit', {preventDefault: () => {}});
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('');
    });
});
