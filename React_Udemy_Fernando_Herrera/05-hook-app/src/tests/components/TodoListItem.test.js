import React from "react";
import {shallow} from 'enzyme';
import { TodoListItem } from "../../Components/08-useReducer/TodoListItem";
import { demoTodos } from "../fixtures/demoTodos";

describe('Pruebas en TodoListItem', () => {
    const todo = demoTodos[0];
    const index = 0;
    const pOnClickMock = jest.fn(id => {});
    const buttonOnClickMock = jest.fn(id => {});
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TodoListItem todo={todo} i={index} pOnClick={pOnClickMock} buttonOnClick={buttonOnClickMock}/>);
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe llamar a la funcion de borrar', () => {
        const button = wrapper.find('button');
        button.simulate('click');
        expect(buttonOnClickMock).toHaveBeenCalledWith(todo.id);
    });
    test('Debe llamar a la funcion de toggle', () => {
        const p = wrapper.find('p');
        p.simulate('click');
        expect(pOnClickMock).toHaveBeenCalledWith(todo.id);
    });
    test('Debe de mostrar el texto correctamente', () => {
        const p = wrapper.find('p');
        expect(p.text()).toBe(`${index + 1}. ${todo.desc}`);
    });
    test('No debe tener la clase completed', () => {
        const p = wrapper.find('p');
        expect(p.hasClass('completed')).toBeFalsy();
    });
    test('Debe de tener la clase completed', () => {
        const todo = demoTodos[0];
        todo.done = true;
        wrapper = shallow(<TodoListItem todo={todo} i={index} pOnClick={pOnClickMock} buttonOnClick={buttonOnClickMock}/>);
        const p = wrapper.find('p');
        expect(p.hasClass('completed')).toBeTruthy();
    });
});
