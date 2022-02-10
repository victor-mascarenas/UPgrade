import { mount } from 'enzyme';
import { MemoryRouter, Navigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { PrivateRoute } from '../../routers/PrivateRoute';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span>Saliendo</span>
}));

describe('Pruebas en PrivateRoute', () => {
    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrar el componente si esta autenticado y guardar en el LocalStorge', () => {
        const context = {
            user: {
                logged: true,
                name: 'Pepe'
            }
        };
        const wrapper = mount(
            <AuthContext.Provider value={context}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper.text().trim()).toBe('Private Component');
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
    });
    test('Debe de bloquear el componente si no esta autenticado', () => {
        const context = {
            user: {
                logged: false,
                name: ''
            }
        };
        const wrapper = mount(
            <AuthContext.Provider value={context}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper.text().trim()).toBe('Saliendo');
    });
});