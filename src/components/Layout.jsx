import React from 'react'
import { Question } from './Question'
import { Submit } from './buttons/Submit'
import {GameContext} from '../contexts/GameContext'

const Layout = () => {
  const context = {}

  return (
    <GameContext.Provider>
        <Question/>
        <Submit/>
    </GameContext.Provider>
  )
}

export default Layout