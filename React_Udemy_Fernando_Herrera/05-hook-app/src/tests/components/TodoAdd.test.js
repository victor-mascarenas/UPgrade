import React from "react";
import {shallow, mount} from 'enzyme';
import { TodoAdd } from "../../Components/08-useReducer/TodoAdd";
import { act } from "@testing-library/react";

describe('Pruebas en TodoAdd', () => {
    const addTodoMock = jest.fn(todo => {});
    const wrapper = shallow(<TodoAdd addTodo={addTodoMock}/>);

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('No debe de llamar addTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({
            preventDefault: () => {}
        });
        expect(addTodoMock).not.toHaveBeenCalled();
    });
    test('Debe de llamar la funcion addTodo', () => {
        const value = 'Aprender Selenium';
        // mount & act for useRef call:
        const wrapper = mount(<TodoAdd addTodo={addTodoMock}/>);
        const input = wrapper.find('input');
        act(() => {
            input.simulate('change', {
                target: {
                    name: 'description',
                    value: value
                }
            });
        });
        const form = wrapper.find('form');
        act(() => {
            form.simulate('submit', {
                preventDefault: () => {}
            });
        });
        wrapper.update();
        //No mount no ref:
        /* const onChange = wrapper.find('input').prop('onChange');
        onChange({
            target: {
                name: 'description',
                value: value
            }
        });
        const onSubmit = wrapper.find('form').prop('onSubmit');
        onSubmit({
            preventDefault: () => {}
        }); */

        expect(addTodoMock).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
});
