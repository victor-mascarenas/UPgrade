import React from 'react';
import {shallow, mount} from 'enzyme';
import { HomePage } from '../../Components/09-useContext/HomePage';
import { UserContext } from '../../Components/09-useContext/UserContext';

describe('Pruebas en HomePage', () => {
    const user = {
        name: 'Victor',
        email: 'vijagama@outlook.es'
    };
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomePage/>
        </UserContext.Provider>
    );

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});
