import React from "react";

//const PrimeraApp = (props) => {
const PrimeraApp = ({saludo}) => {
    return (
        <div>
            {/* <h1>{props.saludo}</h1> */}
            <h1>{saludo}</h1>
            <p>Mi primera aplicacion</p>
        </div>
    );
}

export default PrimeraApp;