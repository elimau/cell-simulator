import React from 'react'
import { CELL_STATE } from '../constants'
import { CellStateType } from '../interfaces'
import Cell from './Cell'
import { BoardOuter, Column, Row } from './Board.styles'

function Board ({ boardSizeX = 6, boardSizeY = 6 }) {
  const dummyState = CELL_STATE.LIVE as CellStateType
  return (
    <BoardOuter>
      <Column>
        {Array.from(Array(boardSizeX).keys()).map((x, i) => {
          return (
            <Row>
              {Array.from(Array(boardSizeY).keys()).map((y, i) => {
                return (
                  <Cell state={dummyState} />
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
