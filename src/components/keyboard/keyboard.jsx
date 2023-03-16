import React from 'react';
import ButtonNumber from '../buttons/buttonNumber';
import ButtonOperator from '../buttons/buttonOperator';
import './keyboard.css';



const Keyboard = (props) => {
    const setDisplay = props.setDisplay;
    const handleCClick = props.handleCClick
    const handleDelClick = props.handleDelClick
    const handleNumberClick = props.handleNumberClick
    const handleOperatorClick = props.handleOperatorClick 
    const handleResultClick = props.handleResultClick
   

    return (
        <div className='keyboard'> 
            <div className='row1'>
                <button className='specialButton' operation={'C'} onClick={handleCClick}>C</button>
                <button className='specialButton' operation={'DEL'} onClick={handleDelClick}>DEL</button>
            </div>

            <div clasName='row2'>
                <ButtonNumber number={'7'} handleNumberClick={handleNumberClick} />
                <ButtonNumber number={'8'} handleNumberClick={handleNumberClick} />
                <ButtonNumber number={'9'} handleNumberClick={handleNumberClick} />
                <ButtonOperator operation={'/'} handleOperatorClick={handleOperatorClick}/>
            </div>

            <div className='row3'>
                <ButtonNumber number={'4'} handleNumberClick={handleNumberClick} />
                <ButtonNumber number={'5'} handleNumberClick={handleNumberClick} />
                <ButtonNumber number={'6'} handleNumberClick={handleNumberClick} />
                <ButtonOperator operation={'*'} handleOperatorClick={handleOperatorClick} />
            </div>

            <div className='row4'>
                <ButtonNumber number={'1'} handleNumberClick={handleNumberClick} />
                <ButtonNumber number={'2'} handleNumberClick={handleNumberClick} />
                <ButtonNumber number={'3'} handleNumberClick={handleNumberClick} />
                <ButtonOperator operation={'-'} handleOperatorClick={handleOperatorClick} />
            </div>

            <div className='row5'>
                <ButtonNumber number={'0'} handleNumberClick={handleNumberClick} />
                <ButtonNumber number={'.'} handleNumberClick={handleNumberClick} />
                <ButtonOperator operation={'='} handleOperatorClick={handleResultClick} />
                <ButtonOperator operation={'+'} handleOperatorClick={handleOperatorClick} />
            </div>
           
            
        </div>
    );
};


export default Keyboard;

