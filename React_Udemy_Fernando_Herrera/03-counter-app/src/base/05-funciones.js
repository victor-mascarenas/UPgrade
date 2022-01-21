const saludar = function saludar(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

//saludar = 20;

//console.log(saludar('Victor'));
/* console.log(saludar);
console.log(saludar2);
console.log(saludar3);
console.log(saludar4); */

export const getUser = () => {
    return {
        uid: 'ABC123',
        userNam: 'senzho'
    };
}
const getUser2 = () => ({
    uid: 'ABC123',
    userNam: 'senzho'
})

/* console.log(getUser());
console.log(getUser2()); */

//Tarea
//1. Transformar a funcion de flecha.
//2. Tiene que retornar un objeto implicito.
//3. Pruebas.
export function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC123',
        userNam: nombre
    };
}
const usuarioActivo = getUsuarioActivo('Victor');
//console.log(usuarioActivo);

const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABC123',
    userNam: nombre
});
//console.log(getUsuarioActivo2('Victor'));