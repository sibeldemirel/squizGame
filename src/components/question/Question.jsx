import React, { useState } from 'react';
import './question.css';
import questionsData from '../../api/db.json';
import AnswerList from '../answers/AnswerList';
import { Submit } from '../buttons/Submit';

export const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [completed, setCompleted] = useState(false);

  const currentQuestion = questionsData.questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedChoice(null);
    } else {
      setCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : 0
    );
    setSelectedChoice(null);
  };

  const handleChoiceSelection = (choice) => {
    setSelectedChoice(choice);
  };

  const handleSubmit = () => {
    if (selectedChoice === currentQuestion.answer) {
      handleNextQuestion();
    } else {
      handlePreviousQuestion();
    }
  };

  return (
    <div className='questionContainer'>
      {completed ? (
        <h2 className='congrats'>Bravo !</h2>
      ) : (
        <>
          <h2 className='level'>Niveau {currentQuestion.id}</h2>
          <p className='questionContent'>{currentQuestion.question}</p>
          <AnswerList
            choices={currentQuestion.choices}
            selectedChoice={selectedChoice}
            onSelect={handleChoiceSelection}
          />
          <Submit handleNextQuestion={handleSubmit} />
        </>
      )}
    </div>
  );
}
