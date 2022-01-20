import React from "react";
import { PropTypes } from "prop-types";

const CounterApp = ({value}) => {
    const buttonOnClick = (e) => {
        console.log(e.target);
    };
    return (
        <div>
            <h1>Counter App</h1>
            <h2>{value}</h2>
            <button onClick={buttonOnClick}>+1</button>
        </div>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;