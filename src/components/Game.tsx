import React, { useState } from 'react'
import { BoardState, CellStateType } from '../interfaces'
import { BOARD_SIZE, LIVE, DEAD } from '../constants'
import Board from './Board'
import { GameOuter, GameTitle, ButtonOuter, Button } from './Game.styles'
import { getNumLiveNeighbours, getBoardInitialState } from '../nextGenerationRules/utils'
import { calculateCellValue } from '../nextGenerationRules/rules'

const Game = () => {
  const [boardState, setBoardState] = useState(getBoardInitialState(BOARD_SIZE.x, BOARD_SIZE.y))
  printBoardState(boardState)

  const cellOnClick = (x: number, y: number) => {
    const newBoardState = JSON.parse(JSON.stringify(boardState)) as BoardState
    newBoardState[x][y] = (newBoardState[x][y] === LIVE) ? DEAD : LIVE
    setBoardState(newBoardState)
  }
  const onClickReset = () => {
    setBoardState(getBoardInitialState(BOARD_SIZE.x, BOARD_SIZE.y))
  }
  const onClickNextGeneration = () => {
    let newBoardState = JSON.parse(JSON.stringify(boardState)) as BoardState
    newBoardState = newBoardState.map((row, x) => {
      return row.map((cell, y) => {
        const numLiveNeighbours = getNumLiveNeighbours(boardState, x, y)
        return calculateCellValue(
          { currentState: boardState[x][y], boardState, position: { x, y }, numLiveNeighbours }
        )
      })
    })
    setBoardState(newBoardState)
  }
  return (
    <GameOuter>
      <GameTitle>Cellss Simulator</GameTitle>
      <Board boardSizeX={BOARD_SIZE.x} boardSizeY={BOARD_SIZE.y} boardState={boardState} cellOnClick={cellOnClick} />
      <ButtonOuter>
        <Button onClick={onClickReset}>Reset</Button>
        <Button onClick={onClickNextGeneration}>Next generation</Button>
      </ButtonOuter>
    </GameOuter>
  )
}

export default Game

const printBoardState = (boardState: BoardState) => {
  const getCellPrintout = (cellValue: CellStateType) => { return (cellValue === LIVE) ? 'X' : '-' }
  let output = "Board state:\n"
  boardState.forEach((row: CellStateType[], y: number) => {
    row.forEach((cell: CellStateType, x: number) => {
      output = output.concat(getCellPrintout(boardState[x][y]) + ' ')
    })
    output = output.concat("\n")
  })
  console.log(output)
}