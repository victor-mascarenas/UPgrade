const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

const {nombre, edad, clave} = persona;

/* console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave); */
console.log(nombre, edad, clave);

const useContext = ({nombre, clave, edad, rango = 'XZ'}) => {
    //console.log(usuario);
    //const {nombre, edad, clave} = persona;
    //console.log(nombre, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -56.2413
        }
    }
}

const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona);
//console.log(avenger);
console.log(nombreClave, anios);
console.log(lat, lng);