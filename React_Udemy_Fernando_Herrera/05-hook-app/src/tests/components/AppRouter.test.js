import React from 'react';
import {mount} from 'enzyme';
import { AppRouter } from '../../Components/09-useContext/AppRouter';
import { UserContext } from '../../Components/09-useContext/UserContext';

describe('Pruebas en AppRouter', () => {
    const user = {
        id: 1234,
        name: 'Victor',
        email: 'vijagama@outlook.es'
    };
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter/>
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});
