import { LIVE } from '../constants'
import {
  getBoardInitialState,
} from './utils'

/**
 * Return a sample board state for testing.
 */
export const getTestBoardState = (liveCells:{x:number,y:number}[] = []) => {
  const boardSize = { x: 6, y: 6 }
  const testBoard = getBoardInitialState(boardSize.x, boardSize.y)

  liveCells.forEach((liveCell, i) => {
    testBoard[liveCell.x][liveCell.y] = LIVE
  })
  return testBoard
}
