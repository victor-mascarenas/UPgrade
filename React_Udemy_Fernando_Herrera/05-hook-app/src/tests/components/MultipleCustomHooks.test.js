import React from "react";
import {shallow} from 'enzyme';
import {renderHook, act} from '@testing-library/react-hooks';
import MultipleCustomHooks from "../../Components/03-examples/MultipleCustomHooks";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Pruebas en MultipleCustomHooks', () => {
    beforeEach(() => {
        useCounter.mockReturnValue({
            state: 1,
            increment: () => {},
            decrement: () => {},
            reset: () => {}
        });
    });
    
    test('Debe mostrarse correctamente', () => {
        useFetch.mockReturnValue({
            data: null, 
            loading: true,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar la informacion', () => {
        const quote = {
            author: 'Victor',
            quote: 'Las decisiones mas dificiles requieren de las voluntades mas fuertes'
        };
        useFetch.mockReturnValue({
            data: [quote], 
            loading: false,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper.find('.alert').exists()).toBeFalsy();
        expect(wrapper.find('.mb-3').text().trim()).toBe(quote.quote);
        expect(wrapper.find('footer').text().trim()).toBe(quote.author);
    });
    
});
