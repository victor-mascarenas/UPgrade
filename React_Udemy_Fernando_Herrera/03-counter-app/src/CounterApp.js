import React, {useState} from "react";
import { PropTypes } from "prop-types";

const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value);
    const plusBtnOnClick = () => {
        setCounter(counter + 1);
    };
    const resetBtnOnClick = () => {
        setCounter(value);
    };
    const minusBtnOnClick = () => {
        setCounter(counter - 1);
    };
    return (
        <div>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button id="plusBtn" onClick={plusBtnOnClick}>+1</button>
            <button id="resetBtn" onClick={resetBtnOnClick}>Reset</button>
            <button id="minusBtn" onClick={minusBtnOnClick}>-1</button>
        </div>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number
}
CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;