import React from 'react';
import { useState } from 'react';
import './calculator.css'; 
import Display from '../display/display';
import Keyboard from '../keyboard/keyboard';

const Calculator = () => {
    const [displayNumber, setDisplayNumber] = useState('');
    const [firstNumber, setFirstNumber] = useState ('');
    const [operator, setOperator] = useState ();
    const [globalDisplay, setGlobalDisplay] = useState ('');

    const handleNumberClick = (char) => {
        setFirstNumber(prevState => prevState + char);
        setDisplayNumber(prevState => prevState + char);
    }

    const handleOperatorClick = (event) => {
        setGlobalDisplay(firstNumber)
        setFirstNumber('')
        setOperator(event)
        setDisplayNumber('')
    }

    const handleResultClick = (event) => {

        let result = 0

        if (operator === '+') {
            result = Number(globalDisplay) + Number(firstNumber)
        } else if (operator === '-') {
            result = Number(globalDisplay) - Number(firstNumber)
        } else if (operator === '/') {
            result = Number(globalDisplay) / Number(firstNumber)
            result = result.toFixed(2)
        } else if (operator === '*') {
            result = Number(globalDisplay) * Number(firstNumber)
        }

        setDisplayNumber(String(result))
        setFirstNumber(String(result))
        setOperator()
    }

    const handleCClick = (event) => {
        setDisplayNumber('')
        setFirstNumber('')
        setGlobalDisplay('')
        setOperator()
    }

    const handleDelClick = (event) => {
        setDisplayNumber(prevDisplay => prevDisplay.slice(0, -1))
    }   
   
    return (
        <div className='calculator'>
            <div className='calContainer'>
                
                <Display display={displayNumber}  />
                <Keyboard handleCClick={handleCClick}
                    handleDelClick={handleDelClick} 
                    handleNumberClick={handleNumberClick} 
                    handleOperatorClick={handleOperatorClick} 
                    handleResultClick={handleResultClick} 
                />
            </div>
        </div>
    );
};

export default Calculator;
