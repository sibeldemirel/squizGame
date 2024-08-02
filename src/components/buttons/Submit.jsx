import React from 'react'
import './submit.css'

export const Submit = ({handleNextQuestion}) => {
  return (
    <div className='submitContainer'>
      <button className='submitBtn' onClick={handleNextQuestion}>Valider</button>
    </div>
  )
}
