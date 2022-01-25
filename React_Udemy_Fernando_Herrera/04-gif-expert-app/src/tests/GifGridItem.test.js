import React from "react";
import {shallow} from 'enzyme';
import GifGridItem from '../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {
    test('Debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem/>);
        expect(wrapper).toMatchSnapshot();
    });
});
