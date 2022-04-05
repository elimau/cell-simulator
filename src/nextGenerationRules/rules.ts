import { CellStateType, BoardState } from '../interfaces'
import { LIVE, DEAD, BOARD_SIZE } from '../constants'

export const calculateCellValue = ({
  currentState,
  boardState,
  position,
  numLiveNeighbours,
}: {
  currentState: CellStateType,
  boardState: BoardState,
  position: { x: number, y: number },
  numLiveNeighbours: number
}): CellStateType => {
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
    // // rule 5
    // case (
    //   position.x === 0 || position.x === BOARD_SIZE.x - 1 ||
    //   position.y === 0 || position.y === BOARD_SIZE.y - 1
    // ): {
    //     result = (numLiveNeighbours === 3) ? LIVE : DEAD
    //     break
    //   }
    default:
      throw new Error('unexpected scenario')
  }
  return result
}
