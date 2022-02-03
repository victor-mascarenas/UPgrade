import React from 'react';
import {shallow, mount} from 'enzyme';
import { UserContext } from '../../Components/09-useContext/UserContext';
import { LoginPage } from '../../Components/09-useContext/LoginPage';

describe('Pruebas en LoginPage', () => {
    const user = {
        id: 1234,
        name: 'Victor',
        email: 'vijagama@outlook.es'
    };
    const setUser = jest.fn((user) => {});
    const wrapper = mount(
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <LoginPage/>
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe ejecutar el setUser con el argumento esperado', () => {
        const btn = wrapper.find('button');
        btn.simulate('click');
        expect(setUser).toHaveBeenCalledWith(user);
    });
    
});
