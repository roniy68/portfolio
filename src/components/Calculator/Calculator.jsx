import React, { useState } from 'react';
import calculate from '../../logic/calculate';
import NumberBtn from './buttons/Button';
import OperationBtn from './buttons/OperationBtn';
import './Calculator.css';
import Display from './Display';

const Calculator = () => {
  const [dataObj, setDataObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setDataObj(calculate(dataObj, e.target.textContent));
  };
  return (
    <div className="calculator">
      <Display result={dataObj.next || dataObj.total || '0'} />
      <div className="calculator-buttons">
        <OperationBtn className="calculator-button" type="button" operation="AC" onClick={handleClick} />
        <OperationBtn className="calculator-button" type="button" operation="+/-" onClick={handleClick} />
        <OperationBtn className="calculator-button" type="button" operation="%" onClick={handleClick} />
        <OperationBtn className="calculator-button right" type="button" operation="÷" onClick={handleClick} />
        <NumberBtn className="calculator-button" type="button" number="7" onClick={handleClick} />
        <NumberBtn className="calculator-button" type="button" number="8" onClick={handleClick} />
        <NumberBtn className="calculator-button" type="button" number="9" onClick={handleClick} />
        <OperationBtn className="calculator-button right" type="button" operation="x" onClick={handleClick} />
        <NumberBtn className="calculator-button" type="button" number="4" onClick={handleClick} />
        <NumberBtn className="calculator-button" type="button" number="5" onClick={handleClick} />
        <NumberBtn className="calculator-button" type="button" number="6" onClick={handleClick} />
        <OperationBtn className="calculator-button right" type="button" operation="-" onClick={handleClick} />
        <NumberBtn className="calculator-button" type="button" number="1" onClick={handleClick} />
        <NumberBtn className="calculator-button" type="button" number="2" onClick={handleClick} />
        <NumberBtn className="calculator-button" type="button" number="3" onClick={handleClick} />
        <OperationBtn className="calculator-button right" type="button" operation="+" onClick={handleClick} />
        <NumberBtn className="calculator-button" id="zero" type="button" number="0" onClick={handleClick} />
        <OperationBtn className="calculator-button" type="button" operation="." onClick={handleClick} />
        <OperationBtn className="calculator-button right" type="button" operation="=" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
