import { CellStateType } from '../interfaces'
import { LIVE, DEAD } from '../constants'

export const calculateCellValue = (currentState: CellStateType, numLiveNeighbours: number): CellStateType => {
  let result
  switch (true) {
    // rule 1
    case (currentState === LIVE && numLiveNeighbours < 2): {
      result = DEAD
      break
    }
    // rule 2
    case (currentState === LIVE && 2 <= numLiveNeighbours && numLiveNeighbours <= 3): {
      result = LIVE
      break
    }
    // rule 3
    case (currentState === LIVE && 3 < numLiveNeighbours): {
      result = DEAD
      break
    }
    // rule 4
    case (currentState === DEAD): {
      result = (numLiveNeighbours === 3) ? LIVE : DEAD
      break
    }
    default:
      throw new Error('unexpected scenario')
  }
  return result
}
