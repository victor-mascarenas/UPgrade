import React from "react";
import { PropTypes } from "prop-types";

const PrimeraApp = ({saludo}) => {
    /* if (!saludo) {
        throw new Error('El saludo es necesario');
    } */
    return (
        <div>
            <h1>{saludo}</h1>
            <p>Mi primera aplicacion</p>
        </div>
    );
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;