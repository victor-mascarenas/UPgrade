import React from "react";
import {shallow} from 'enzyme';
import {renderHook, act} from '@testing-library/react-hooks';
import { RealExampleRef } from "../../Components/04-useRef/RealExampleRef";

describe('Pruebas en RealExampleRef', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RealExampleRef/>);
    });

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar el componente MultipleCustomHooks', () => {
        const btn = wrapper.find('button');
        btn.simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBeTruthy();
    });
    test('No debe de mostrar el componente MultipleCustomHooks', () => {
        expect(wrapper.find('MultipleCustomHooks').exists()).toBeFalsy();
    });
});
