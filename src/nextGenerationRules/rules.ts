import { CellStateType } from '../interfaces'
import { CELL_STATE } from '../constants'

export const sum = (a: number, b: number) => {
  return a + b
}

export const calculateCellValue = (currentState: CellStateType, numLiveNeighbours: number): CellStateType => {
  let result = CELL_STATE.DEAD as CellStateType // todo: impl
  return result
}

export const getNumLiveNeighbours = (boardState: CellStateType[][], cellX: number, cellY: number): number => {
  let result = 0 // todo: impl
  return result
}
