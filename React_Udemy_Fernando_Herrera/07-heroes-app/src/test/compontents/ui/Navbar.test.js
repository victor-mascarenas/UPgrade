import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas en Navbar', () => {
    const name = 'Pedro';
    const mockDispatch = jest.fn();
    const wrapper = mount(
        <AuthContext.Provider value={{
            user: {
                logged: false,
                name
            },
            dispatch: mockDispatch
        }}>
            <MemoryRouter initialEntries={['/']}>
                <Navbar/>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe(name);
    });
    test('Debe de llamar el logout, llamar el navigate y el dispatch con los argumentos', () => {
        wrapper.find('button').simulate('click');
        const action = {
            type: types.logout,
            payload: {
                logged: false
            }
        };
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(action);
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/login', {
            replace: true
        });
    });
});