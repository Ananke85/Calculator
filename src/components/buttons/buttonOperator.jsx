import React from 'react';

const ButtonOperator = (props) => {
    const operator = props.operation; 
    const setDisplay = props.setDisplay;

    return (
        
        <button onClick={() => setDisplay(operator)}>{operator}</button>
          
    );
};

export default ButtonOperator;
