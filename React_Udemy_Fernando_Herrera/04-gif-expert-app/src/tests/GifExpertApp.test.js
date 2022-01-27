import React from "react";
import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en el componente GifExpertApp', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<GifExpertApp/>);
    });
    
    test('Debe empatar con el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['One punch', 'Dragon ball'];
        wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
});
