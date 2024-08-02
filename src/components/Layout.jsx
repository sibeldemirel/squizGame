import React from 'react'
import { Question } from './question/Question'
import { Submit } from './buttons/Submit'
import {GameContext} from '../contexts/GameContext'
import Level from './Level'
import Header from './buttons/header/Header'

const Layout = () => {
  const context = {}

  return (
    <GameContext.Provider>
        <Header/>
        {/* <Level/>
        <Question/>
        <Submit/> */}
    </GameContext.Provider>
  )
}

export default Layout