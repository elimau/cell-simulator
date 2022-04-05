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
    // @ts-ignore: Fallthrough case in switch
    case (currentState === LIVE && numLiveNeighbours < 2): {
      result = DEAD
    }
    // rule 2
    // @ts-ignore: Fallthrough case in switch
    case (currentState === LIVE && 2 <= numLiveNeighbours && numLiveNeighbours <= 3): {
      result = LIVE
    }
    // rule 3
    // @ts-ignore: Fallthrough case in switch
    case (currentState === LIVE && 3 < numLiveNeighbours): {
      result = DEAD
    }
    // rule 4
    // @ts-ignore: Fallthrough case in switch
    case (currentState === DEAD): {
      result = (numLiveNeighbours === 3) ? LIVE : DEAD
    }
    // rule 5
    // @ts-ignore: Fallthrough case in switch
    case (
      position.x === 0 || position.x === BOARD_SIZE.x - 1 ||
      position.y === 0 || position.y === BOARD_SIZE.y - 1
    ): {
        let neighbourStates: CellStateType[] = []
        if (
          position.x === 0 &&
          position.y > 0 && position.y < BOARD_SIZE.y - 1
        ) {
          neighbourStates.push(
            boardState[BOARD_SIZE.x - 1][position.y - 1],
            boardState[BOARD_SIZE.x - 1][position.y],
            boardState[BOARD_SIZE.x - 1][position.y + 1],
          )
        } else if (
          position.x === BOARD_SIZE.x - 1 &&
          position.y > 0 && position.y < BOARD_SIZE.y - 1
        ) {
          neighbourStates.push(
            boardState[0][position.y - 1],
            boardState[0][position.y],
            boardState[0][position.y + 1],
          )
        } else if (
          position.y === 0 &&
          position.x > 0 && position.x < BOARD_SIZE.x - 1
        ) {
          neighbourStates.push(
            boardState[position.x - 1][BOARD_SIZE.y - 1],
            boardState[position.x][BOARD_SIZE.y - 1],
            boardState[position.x + 1][BOARD_SIZE.y - 1],
          )
        } else if (
          position.y === BOARD_SIZE.y - 1 &&
          position.x > 0 && position.x < BOARD_SIZE.x - 1
        ) {
          neighbourStates.push(
            boardState[position.x - 1][0],
            boardState[position.x][0],
            boardState[position.x + 1][0],
          )
        }
        if (neighbourStates.length === 3 && neighbourStates.every(s => s === LIVE)) {
          result = LIVE
        }

      }
    // eslint-disable-next-line: no-fallthrough 
    default:
      if (!result) {
        throw new Error('unexpected scenario')
      }
  }
  return result
}
