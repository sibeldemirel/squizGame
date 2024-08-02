import React from 'react'
import { Question } from './question/Question'
import {GameContext} from '../contexts/GameContext'
import Level from './Level'
import Header from './header/Header'

const Layout = () => {
  const context = {}

  return (
    <GameContext.Provider>
        <Header/>
        {/* <Level/> */}
        <Question/>
    </GameContext.Provider>
  )
}

export default Layout