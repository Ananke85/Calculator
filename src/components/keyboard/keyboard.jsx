import React from 'react';
import ButtonNumber from '../buttons/buttonNumber';
import ButtonOperator from '../buttons/buttonOperator';
import '../buttons/buttonNumber.css';

const Keyboard = (props) => {
    const setDisplay = props.setDisplay;
   

    return (
        <div> 
           <ButtonOperator operation={'DEL'} setDisplay={setDisplay} />
           <ButtonOperator operation={'AC'} setDisplay={setDisplay} />
           <ButtonNumber number={8} setDisplay={setDisplay} />
           <ButtonNumber number={7} setDisplay={setDisplay} />
           <ButtonNumber number={9} setDisplay={setDisplay} />
           <ButtonOperator operation={'/'} setDisplay={setDisplay} />
           <ButtonNumber number={4} setDisplay={setDisplay} />
           <ButtonNumber number={5} setDisplay={setDisplay} />
           <ButtonNumber number={6} setDisplay={setDisplay} />
           <ButtonOperator operation={'*'} setDisplay={setDisplay}/>
           <ButtonNumber number={1} setDisplay={setDisplay} />
           <ButtonNumber number={2} setDisplay={setDisplay} />
           <ButtonNumber number={3} setDisplay={setDisplay} />
           <ButtonOperator operation={'+'} setDisplay={setDisplay} />
           <ButtonOperator operation={'-'} setDisplay={setDisplay} />
           <ButtonOperator operation={'='} setDisplay={setDisplay} />
           
           
            

            
        </div>
    );
};


export default Keyboard;

