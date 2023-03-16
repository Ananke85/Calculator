import React from 'react';
import './calculator.css'; 
import Display from '../display/display';
import Keyboard from '../keyboard/keyboard';

const Calculator = () => {
    const [displayNumber, setDisplayNumber] = React.useState('');

    const addValueToDisplay = (value) => {
        const result = displayNumber + value;
        setDisplayNumber(result);
    };    
   
    return (
        <div>
            <h1>Esta es mi calculadora</h1>
            <Display display={displayNumber} />
            <Keyboard setDisplay={addValueToDisplay} display={displayNumber} />
        </div>
    );
};

export default Calculator;
