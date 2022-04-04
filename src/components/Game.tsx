import React from 'react'
import { BOARD_SIZE } from '../constants'
import Board from './Board'
import { GameOuter } from './Game.styles'

function Game () {
  return (
    <GameOuter>
      <Board boardSizeX={BOARD_SIZE.x} boardSizeY={BOARD_SIZE.y} />
    </GameOuter>
  )
}

export default Game
