import React, {useState} from "react";
import { PropTypes } from "prop-types";

const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value);
    const buttonOnClick = () => {
        setCounter(counter + 1);
        //setCounter((c) => c + 1);
    };
    return (
        <div>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={buttonOnClick}>+1</button>
        </div>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;