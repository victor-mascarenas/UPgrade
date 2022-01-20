import React from "react";

const PrimeraApp = () => {
    /* const saludo = 'Hola mundo const';
    const saludo = 123;
    const saludo = 23.345;
    const saludo = [1, 'asfsd']; */
    /* const saludo = {
        nombre: 'Victor',
        edad: 24
    }; */
    const saludo = 'Hola mundo';
    return (
        <div>
            <h1>{saludo}</h1>
            {/* <h1>{JSON.stringify(saludo)}</h1> */}
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>Mi primera aplicacion</p>
        </div>
    );
}

export default PrimeraApp;