import React from 'react'
import { Question } from './question/Question'
import { GameContext } from '../contexts/GameContext'
import Header from './header/Header'

const Layout = () => {
  const context = {}

  return (
    <GameContext.Provider value={context}>
      <Header />
      <Question />
    </GameContext.Provider>
  )
}

export default Layout