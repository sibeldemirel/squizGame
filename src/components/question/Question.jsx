import React, { useState } from 'react'
import './question.css'
import questionsData from '../../api/db.json';

export const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questionsData.questions.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className='questionContainer'>
      <h2>Question {questionsData.questions[currentQuestionIndex].id}</h2>
      <p>{questionsData.questions[currentQuestionIndex].question}</p>
      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
}
