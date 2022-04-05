import { LIVE } from '../constants'
import {
  getBoardInitialState,
  getNumLiveNeighbours,
} from './utils'

describe("Utils", () => {
  describe("getNumLiveNeighbours", () => {
    it('todo - random test 1', () => {
      // todo: 
      const cellX = 0
      const cellY = 0
      const expectedResult = 2
      const result = getNumLiveNeighbours(getTestBoard(), cellX, cellY)
      expect(result).toEqual(expectedResult)
    })
    it('todo - random test 2', () => {
      // todo: 
      const cellX = 1
      const cellY = 2
      const expectedResult = 4
      const result = getNumLiveNeighbours(getTestBoard(), cellX, cellY)
      expect(result).toEqual(expectedResult)
    })
    it('todo - random test 3', () => {
      // todo: 
      const cellX = 1
      const cellY = 4
      const expectedResult = 3
      const result = getNumLiveNeighbours(getTestBoard(), cellX, cellY)
      expect(result).toEqual(expectedResult)
    })
    it('todo - random test 4', () => {
      // todo: 
      const cellX = 2
      const cellY = 4
      const expectedResult = 4
      const result = getNumLiveNeighbours(getTestBoard(), cellX, cellY)
      expect(result).toEqual(expectedResult)
    })
    it('todo - random test 5', () => {
      // todo: 
      const cellX = 3
      const cellY = 5
      const expectedResult = 0
      const result = getNumLiveNeighbours(getTestBoard(), cellX, cellY)
      expect(result).toEqual(expectedResult)
    })
    it('todo - random test 6', () => {
      // todo: 
      const cellX = 4
      const cellY = 5
      const expectedResult = 1
      const result = getNumLiveNeighbours(getTestBoard(), cellX, cellY)
      expect(result).toEqual(expectedResult)
    })
  })
})


// Test board
// - - - - - -
// X X - - X -
// - - X - - -
// - - X - - -
// X X - - - -
// - X - X - -
const getTestBoard = () => {
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
