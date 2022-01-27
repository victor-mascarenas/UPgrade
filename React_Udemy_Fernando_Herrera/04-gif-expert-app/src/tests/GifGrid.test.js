import React from "react";
import {shallow} from 'enzyme';
import GifGrid from '../components/GifGrid';
import useFetchGifs from "../hooks/useFetchGifs";

//'Falsea' el hook
jest.mock("../hooks/useFetchGifs");

describe('Pruebas en el componente GifGrid', () => {
    const category = 'Naruto';
    const mockReturn = {
        data: [],
        loading: true
    };
    let wrapper;
    
    beforeEach(() => {
        //Se establece el valor de retorno del hook false
        useFetchGifs.mockReturnValue(mockReturn);
        wrapper = shallow(<GifGrid category={category}/>);
    });

    test('Debe empatar con el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        const mockReturn = {
            data: [{
                id: 'ABC',
                url: 'https://sdsdf/sdf/etr/img.gif',
                title: 'Imagen'
            }],
            loading: false
        };
        useFetchGifs.mockReturnValue(mockReturn);
        wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });
    
});
