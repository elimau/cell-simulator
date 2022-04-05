import { getNumLiveNeighbours } from './utils'
import { getTestBoardState } from './testUtils'

describe("Utils", () => {
  describe("getNumLiveNeighbours", () => {
    it('todo - random test 1', () => {
      // todo: 
      const cellX = 0
      const cellY = 0
      const expectedResult = 2
      const result = getNumLiveNeighbours(getTestBoardState(), cellX, cellY)
      expect(result).toEqual(expectedResult)
    })
    it('todo - random test 2', () => {
      // todo: 
      const cellX = 1
      const cellY = 2
      const expectedResult = 4
      const result = getNumLiveNeighbours(getTestBoardState(), cellX, cellY)
      expect(result).toEqual(expectedResult)
    })
    it('todo - random test 3', () => {
      // todo: 
      const cellX = 1
      const cellY = 4
      const expectedResult = 3
      const result = getNumLiveNeighbours(getTestBoardState(), cellX, cellY)
      expect(result).toEqual(expectedResult)
    })
    it('todo - random test 4', () => {
      // todo: 
      const cellX = 2
      const cellY = 4
      const expectedResult = 4
      const result = getNumLiveNeighbours(getTestBoardState(), cellX, cellY)
      expect(result).toEqual(expectedResult)
    })
    it('todo - random test 5', () => {
      // todo: 
      const cellX = 3
      const cellY = 5
      const expectedResult = 0
      const result = getNumLiveNeighbours(getTestBoardState(), cellX, cellY)
      expect(result).toEqual(expectedResult)
    })
    it('todo - random test 6', () => {
      // todo: 
      const cellX = 4
      const cellY = 5
      const expectedResult = 1
      const result = getNumLiveNeighbours(getTestBoardState(), cellX, cellY)
      expect(result).toEqual(expectedResult)
    })
  })
})

