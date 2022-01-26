import React from "react";
import {shallow} from 'enzyme';
import GifGridItem from '../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {
    const title = 'Un titulo';
    const url = 'https://localhost:8080/img/1.gif'
    test('Debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem title={title} url={url}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
