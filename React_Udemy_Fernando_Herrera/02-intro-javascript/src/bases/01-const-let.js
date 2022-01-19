//Variables y constantes
const nombre = 'Victor';
let apellido = 'Mascareñas';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

if (true) {
    //Variables de contexto
    let valorDado = 6;
    console.log(valorDado);
    const nombre = 'Javier';
    console.log(nombre);
}

console.log(valorDado);