const nombre = 'Victor Javier';
const apellido = 'Garcia Mascareñas';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

//console.log(nombreCompleto);

export function getSaludo(nombre = 'Karla') {
    return `Hola ${nombre}`;
}

//console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);