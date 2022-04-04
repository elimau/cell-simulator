import React, { useState } from 'react'
import { CELL_STATE } from '../constants'
import { CellStateType } from '../interfaces'
import Cell from './Cell'
import { BoardOuter, Column, Row } from './Board.styles'

function Board ({ boardSizeX = 6, boardSizeY = 6 }) {
  const dummyState = CELL_STATE.LIVE as CellStateType
  const [boardState, setBoardState] = useState(
    Array(boardSizeY).fill(
      // Array(boardSizeX).fill(CELL_STATE.LIVE)
      [
        CELL_STATE.LIVE,CELL_STATE.LIVE,CELL_STATE.LIVE,
        CELL_STATE.DEAD,CELL_STATE.DEAD,CELL_STATE.DEAD,
      ]
    )
  )
  return (
    <BoardOuter>
      <Column>
        {Array.from(Array(boardSizeX).keys()).map((row, y) => {
          return (
            <Row>
              {Array.from(Array(boardSizeY).keys()).map((cell, x) => {
                return (
                  <Cell state={boardState[y][x]} />
                )
              })}
            </Row>
          )
        })}
      </Column>
    </BoardOuter>
  )
}

export default Board
