import React, { useState } from 'react'
import { BoardState } from '../interfaces'
import { CELL_STATE, BOARD_SIZE } from '../constants'
import Board from './Board'
import { GameOuter, ButtonOuter, Button } from './Game.styles'


const getBoardInitialState = (boardSizeX: number, boardSizeY: number): BoardState => {
  return Array(boardSizeX).fill(
    Array(boardSizeY).fill(CELL_STATE.LIVE)
  )
}

const Game = () => {
  const [boardState, setBoardState] = useState(getBoardInitialState(BOARD_SIZE.x, BOARD_SIZE.y))

  const cellOnClick = (x: number, y: number) => {
    const newBoardState = JSON.parse(JSON.stringify(boardState))
    newBoardState[x][y] = (newBoardState[x][y] === CELL_STATE.LIVE) ? CELL_STATE.DEAD : CELL_STATE.LIVE
    setBoardState(newBoardState)
  }
  const onClickReset = () => {
    setBoardState(getBoardInitialState(BOARD_SIZE.x, BOARD_SIZE.y))
  }
  const onClickNextGeneration = () => {
    // todo: impl
  }
  return (
    <GameOuter>
      <Board boardSizeX={BOARD_SIZE.x} boardSizeY={BOARD_SIZE.y} boardState={boardState} cellOnClick={cellOnClick} />
      <ButtonOuter>
        <Button onClick={onClickReset}>Reset</Button>
        <Button onClick={onClickNextGeneration}>Next generation</Button>
      </ButtonOuter>
    </GameOuter>
  )
}

export default Game
