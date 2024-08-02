import React from 'react';
import './answerlist.css';

const AnswerList = ({ choices, selectedChoice, onSelect }) => {
    return (
        <div className='answerContainer'>
            {choices.map((choice, index) => (
                <div key={index} className='answer'>
                    <input
                        className='radioBtn'
                        type="radio"
                        id={`choice-${index}`}
                        name="choice"
                        value={choice}
                        checked={selectedChoice === choice}
                        onChange={() => onSelect(choice)}
                    />
                    <label htmlFor={`choice-${index}`} className='answerLabel'>{choice}</label>
                </div>
            ))}
        </div>
    );
};

export default AnswerList;
