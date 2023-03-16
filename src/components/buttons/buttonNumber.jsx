import React from 'react';


const ButtonNumber = (props) => {
    const value = props.number;
    const setDisplay = props.setDisplay;

    return (
         
        <button onClick={() => setDisplay(value)}>{value}</button>
           

    
    );
};


export default ButtonNumber;