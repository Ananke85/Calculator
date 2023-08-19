import React from "react";
import ButtonNumber from "../buttons/buttonNumber";
import ButtonOperator from "../buttons/buttonOperator";
import "./keyboard.css";

const Keyboard = (props) => {
  const handleCClick = props.handleCClick;
  const handleDelClick = props.handleDelClick;
  const handleNumberClick = props.handleNumberClick;
  const handleOperatorClick = props.handleOperatorClick;
  const handleResultClick = props.handleResultClick;

  return (
    <div className="keyboard">
      <div className="row1">
        <button
          className="specialButton"
          operation={"C"}
          onClick={handleCClick}
        >
          C
        </button>
        <button
          className="specialButton"
          operation={"DEL"}
          onClick={handleDelClick}
        >
          DEL
        </button>
      </div>

      <div clasName="row2">
        {[7, 8, 9].map((number) => (
          <ButtonNumber
            key={number}
            number={number}
            handleNumberClick={handleNumberClick}
          />
        ))}

        <ButtonOperator
          operation={"/"}
          handleOperatorClick={handleOperatorClick}
        />
      </div>

      <div className="row3">
        {[4, 5, 6].map((number) => (
          <ButtonNumber
            key={number}
            number={number}
            handleNumberClick={handleNumberClick}
          />
        ))}

        <ButtonOperator
          operation={"*"}
          handleOperatorClick={handleOperatorClick}
        />
      </div>

      <div className="row4">
        {[1, 2, 3].map((number) => (
          <ButtonNumber
            key={number}
            number={number}
            handleNumberClick={handleNumberClick}
          />
        ))}

        <ButtonOperator
          operation={"-"}
          handleOperatorClick={handleOperatorClick}
        />
      </div>

      <div className="row5">
        <ButtonNumber number={"0"} handleNumberClick={handleNumberClick} />
        <ButtonNumber number={"."} handleNumberClick={handleNumberClick} />
        <ButtonOperator
          operation={"="}
          handleOperatorClick={handleResultClick}
        />
        <ButtonOperator
          operation={"+"}
          handleOperatorClick={handleOperatorClick}
        />
      </div>
    </div>
  );
};

export default Keyboard;
