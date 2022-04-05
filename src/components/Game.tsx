import React, { useState } from 'react'
import { BoardState } from '../interfaces'
import { BOARD_SIZE, LIVE, DEAD } from '../constants'
import Board from './Board'
import { GameOuter, GameTitle, ButtonOuter, Button } from './Game.styles'


const getBoardInitialState = (boardSizeX: number, boardSizeY: number): BoardState => {
  return Array(boardSizeX).fill(
    Array(boardSizeY).fill(DEAD)
  )
}

const Game = () => {
  const [boardState, setBoardState] = useState(getBoardInitialState(BOARD_SIZE.x, BOARD_SIZE.y))

  const cellOnClick = (x: number, y: number) => {
    const newBoardState = JSON.parse(JSON.stringify(boardState))
    newBoardState[x][y] = (newBoardState[x][y] === LIVE) ? DEAD : LIVE
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
      <GameTitle>Cell Simulator</GameTitle>
      <Board boardSizeX={BOARD_SIZE.x} boardSizeY={BOARD_SIZE.y} boardState={boardState} cellOnClick={cellOnClick} />
      <ButtonOuter>
        <Button onClick={onClickReset}>Reset</Button>
        <Button onClick={onClickNextGeneration}>Next generation</Button>
      </ButtonOuter>
    </GameOuter>
  )
}

export default Game
