import React from 'react';
import './buttons.css';



const ButtonNumber = (props) => {
    const value = props.number;
    const handleNumberClick = props.handleNumberClick;

    return (
        
        <button className='buttonNumber' onClick={(event) => handleNumberClick(value)}>{value}</button>
           
        );
};


export default ButtonNumber;