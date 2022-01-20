describe('Pruebas en el archivo de.test.js', () => {
    test('deben de ser iguales los string', () => {
        //1. Inicializacion (Arrange)
        const mensaje = 'Hola mundo';
        //2. Estimulo (Act)
        const mensaje2 = 'Hola mundo ';
        //3. Observar (Assert)
        expect(mensaje).toBe(mensaje2);
    });
});