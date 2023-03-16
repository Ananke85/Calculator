import React from 'react';
import './buttons.css';


const ButtonOperator = (props) => {
    const operator = props.operation; 
    const handleOperatorClick = props.handleOperatorClick;

    return (
       
        <button className='buttonOperator' onClick={(event) => handleOperatorClick(operator)}>{operator}</button>       
          
    );
};

export default ButtonOperator;
