const personajes = ['Goku', 'Vegeta', 'Truncks'];

/* console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]); */

const [p1, , p3] = personajes;

console.log(p1, p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. El primer valor del arreglo se llamara nombre
//2. El segundo se llamara setNombre
const useState = (valor) => {
    return [valor, () => {
        console.log('Hola mundo');
    }];
}
const [nombre, setNombre] = useState('Goku');
//console.log(arr);
//arr[1]();

console.log(nombre);
setNombre();