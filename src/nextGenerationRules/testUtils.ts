import { LIVE } from '../constants'
import {
  getBoardInitialState,
} from './utils'

// A specific test board State. 
// todo: should be more dynamic.
// The specific test board:
// - - - - - -
// X X - - X -
// - - X - - -
// - - X - - -
// X X - - - -
// - X - X - -
export const getTestBoardState = () => {
  const boardSize = { x: 6, y: 6 }
  const testBoard = getBoardInitialState(boardSize.x, boardSize.y)
  const liveCells = [
    { y: 1, x: 0 }, { y: 1, x: 1 }, { y: 1, x: 4 },
    { y: 2, x: 2 },
    { y: 3, x: 2 },
    { y: 4, x: 0 }, { y: 4, x: 1 },
    { y: 5, x: 1 }, { y: 5, x: 3 },
  ]
  liveCells.forEach((liveCell, i) => {
    testBoard[liveCell.x][liveCell.y] = LIVE
  })
  return testBoard
}
