import React, { useState } from 'react';
import './style.css';

const Calculator = () => {
    const [input, setInput] = useState('0');

    const clearInput = () => {
        setInput('0');
    };

    const clearEntry = () => {
        setInput(input.slice(0, -1) || '0');
    };

    const digitBtnPressed = (digit) => {
        setInput(input === '0' ? String(digit) : input + digit);
    };

    const decimalBtnPressed = () => {
        if (!input.includes('.')) {
            setInput(input + '.');
        }
    };

    const operatorBtnPressed = (operator) => {
        if (input !== '0') {
            setInput(input + operator);
        }
    };

    const equalBtnPressed = () => {
        try {
            // Evaluate the expression
            const result = eval(input.replace('x', '*'));
            setInput(String(result));
        } catch {
            setInput('Error');
        }
    };

    return (
        <div className="calculator-container">
            <h1>Calculator</h1>
            <input type="text" id="inputBox" value={input} readOnly />
            <table>
                <tbody>
                    <tr>
                        <td className="ACBtn" onClick={clearInput}>AC</td>
                        <td className="ACBtn" onClick={clearEntry}>C</td>
                        <td className="operatorBtn" onClick={() => operatorBtnPressed('%')}>%</td>
                        <td className="operatorBtn" onClick={() => operatorBtnPressed('/')}>/</td>
                    </tr>
                    <tr>
                        <td className="digitBtn" onClick={() => digitBtnPressed(7)}>7</td>
                        <td className="digitBtn" onClick={() => digitBtnPressed(8)}>8</td>
                        <td className="digitBtn" onClick={() => digitBtnPressed(9)}>9</td>
                        <td className="operatorBtn" onClick={() => operatorBtnPressed('x')}>x</td>
                    </tr>
                    <tr>
                        <td className="digitBtn" onClick={() => digitBtnPressed(4)}>4</td>
                        <td className="digitBtn" onClick={() => digitBtnPressed(5)}>5</td>
                        <td className="digitBtn" onClick={() => digitBtnPressed(6)}>6</td>
                        <td className="operatorBtn" onClick={() => operatorBtnPressed('-')}>-</td>
                    </tr>
                    <tr>
                        <td className="digitBtn" onClick={() => digitBtnPressed(1)}>1</td>
                        <td className="digitBtn" onClick={() => digitBtnPressed(2)}>2</td>
                        <td className="digitBtn" onClick={() => digitBtnPressed(3)}>3</td>
                        <td className="operatorBtn" onClick={() => operatorBtnPressed('+')}>+</td>
                    </tr>
                    <tr>
                        <td className="digitBtn" onClick={() => digitBtnPressed(0)}>0</td>
                        <td className="digitBtn" onClick={decimalBtnPressed}>.</td>
                        <td colSpan="2" className="operatorBtn" onClick={equalBtnPressed}>=</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Calculator;