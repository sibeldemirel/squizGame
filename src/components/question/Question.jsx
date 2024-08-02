import React, { useState } from 'react'
import './question.css'
import questionsData from '../../api/db.json';
import AnswerList from '../answers/AnswerList';
import { Submit } from '../buttons/Submit';

export const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = questionsData.questions[currentQuestionIndex];


  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questionsData.questions.length - 1 ? prevIndex + 1 : 0
    );
    setSelectedChoice(null);
    setShowAnswer(false);
  };

  const handleChoiceSelection = (choice) => {
    setSelectedChoice(choice);
  };

  const handleSubmit = () => {
    setShowAnswer(true);
  };

  return (
    <div className='questionContainer'>
      <h2 className='level'>Niveau {questionsData.questions[currentQuestionIndex].id}</h2>
      <p className='questionContent'>{questionsData.questions[currentQuestionIndex].question}</p>
      <AnswerList
        choices={currentQuestion.choices}
        selectedChoice={selectedChoice}
        onSelect={handleChoiceSelection}
      />
      <Submit onClick={handleNextQuestion}/>
    </div>
  );
}
