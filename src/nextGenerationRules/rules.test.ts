import { LIVE, DEAD } from '../constants'
import {
  calculateCellValue,
} from './rules'
import { getTestBoardState } from './testUtils'

const testBoardState = getTestBoardState()

describe("Next Generation Rules", () => {
  it('rule 1 - A Cell with fewer than two live neighbours dies of under-population.', () => {
    expect(calculateCellValue(
      { currentState: LIVE, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 0 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: LIVE, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 1 }
    )).toEqual(DEAD)
  })
  it('rule 2 - A Cell with 2 or 3 live neighbours lives on to the next generation.', () => {
    expect(calculateCellValue(
      { currentState: LIVE, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 2 }
    )).toEqual(LIVE)
    expect(calculateCellValue(
      { currentState: LIVE, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 3 }
    )).toEqual(LIVE)
  })
  it('rule 3 - A Cell with more than 3 live neighbours dies of overcrowding.', () => {
    expect(calculateCellValue(
      { currentState: LIVE, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 4 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: LIVE, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 5 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: LIVE, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 6 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: LIVE, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 7 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: LIVE, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 8 }
    )).toEqual(DEAD)
  })
  it('rule 4 - An empty Cell with exactly 3 live neighbours "comes to life".', () => {
    expect(calculateCellValue(
      { currentState: DEAD, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 0 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 1 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 2 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 3 }
    )).toEqual(LIVE)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 4 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 5 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 6 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 7 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: testBoardState, position: { x: 2, y: 2 }, numLiveNeighbours: 8 }
    )).toEqual(DEAD)
  })
  it('TODO rule 5 - A Cell who "comes to life" outside the board should wrap at the other side of the board.', () => {
    let liveCells
    liveCells = [{ x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }]
    expect(calculateCellValue(
      { currentState: DEAD, boardState: getTestBoardState(liveCells), position: { x: 0, y: 0 }, numLiveNeighbours: 0 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: getTestBoardState(liveCells), position: { x: 1, y: 0 }, numLiveNeighbours: 0 }
    )).toEqual(LIVE)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: getTestBoardState(liveCells), position: { x: 2, y: 0 }, numLiveNeighbours: 0 }
    )).toEqual(DEAD)

    liveCells = [{ x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }]
    expect(calculateCellValue(
      { currentState: DEAD, boardState: getTestBoardState(liveCells), position: { x: 3, y: 5 }, numLiveNeighbours: 0 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: getTestBoardState(liveCells), position: { x: 4, y: 5 }, numLiveNeighbours: 0 }
    )).toEqual(LIVE)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: getTestBoardState(liveCells), position: { x: 5, y: 5 }, numLiveNeighbours: 0 }
    )).toEqual(DEAD)

    liveCells = [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }]
    expect(calculateCellValue(
      { currentState: DEAD, boardState: getTestBoardState(liveCells), position: { x: 5, y: 0 }, numLiveNeighbours: 0 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: getTestBoardState(liveCells), position: { x: 5, y: 1 }, numLiveNeighbours: 0 }
    )).toEqual(LIVE)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: getTestBoardState(liveCells), position: { x: 5, y: 2 }, numLiveNeighbours: 0 }
    )).toEqual(DEAD)

    liveCells = [{ x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }]
    expect(calculateCellValue(
      { currentState: DEAD, boardState: getTestBoardState(liveCells), position: { x: 0, y: 3 }, numLiveNeighbours: 0 }
    )).toEqual(DEAD)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: getTestBoardState(liveCells), position: { x: 0, y: 4 }, numLiveNeighbours: 0 }
    )).toEqual(LIVE)
    expect(calculateCellValue(
      { currentState: DEAD, boardState: getTestBoardState(liveCells), position: { x: 0, y: 5 }, numLiveNeighbours: 0 }
    )).toEqual(DEAD)
  })

})
