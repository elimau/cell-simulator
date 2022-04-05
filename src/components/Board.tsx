import { BoardState } from '../interfaces'
import Cell from './Cell'
import { BoardOuter, Column, Row } from './Board.styles'

interface Props {
  boardSizeX: number
  boardSizeY: number
  boardState: BoardState
  cellOnClick: (x: number, y: number) => void
}

const Board = ({ boardSizeX = 6, boardSizeY = 6, boardState, cellOnClick }: Props): JSX.Element => {
  return (
    <BoardOuter>
      <Column>
        {Array.from(Array(boardSizeX).keys()).map((row, y) => {
          return (
            <Row key={y}>
              {Array.from(Array(boardSizeY).keys()).map((cell, x) => {
                return (
                  <Cell key={`${x-y}`} state={boardState[x][y]} onClick={() => { cellOnClick(x, y) }} />
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
