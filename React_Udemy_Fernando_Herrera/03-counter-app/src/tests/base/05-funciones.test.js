import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const usuarioTest = {
            uid: 'ABC123',
            userNam: 'senzho'
        }
        const usuario = getUser();
        expect(usuario).toStrictEqual(usuarioTest);
    });
    test('getUsuarioActivo debe retornar un objeto con el mismo nombre', () => {
        const userName = 'senzho';
        const usuarioTest = {
            uid: 'ABC123',
            userNam: userName
        }
        const usuario = getUsuarioActivo(userName);
        expect(usuario).toStrictEqual(usuarioTest);
        //expect(usuario.userNam).toBe(usuarioTest.userNam);
    });
});