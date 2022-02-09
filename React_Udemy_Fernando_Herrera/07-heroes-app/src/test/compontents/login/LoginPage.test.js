import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { LoginPage } from '../../../components/login/LoginPage';
import { types } from '../../../types/types';

let mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas n LoginPage', () => {
    const dispatchMock = jest.fn();
    const context = {
        user: {
            name: '',
            logged: false
        },
        dispatch: dispatchMock
    };
    const wrapper = mount(
        <AuthContext.Provider value={context}>
            <MemoryRouter>
                <LoginPage/>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe de realizar el dispatch y la navegacion', () => {
        const button = wrapper.find('button');
        const navigateOptions = {
            replace: true
        };
        const action= {
            type: types.login,
            payload: {
                name: 'Victor',
                logged: true
            }
        };
        const lastPath = '/dc';
        button.simulate('click');
        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(dispatchMock).toHaveBeenCalledWith(action);
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/', navigateOptions);
        localStorage.setItem('lastPath', lastPath);
        button.simulate('click');
        expect(mockNavigate).toHaveBeenCalledTimes(2);
        expect(mockNavigate).toHaveBeenCalledWith(lastPath, navigateOptions);
    });
});