import { CellStateType, BoardState } from '../interfaces'
import { BOARD_SIZE, LIVE, DEAD } from '../constants'

export const getNumLiveNeighbours = (boardState: CellStateType[][], cellX: number, cellY: number): number => {
  let numLiveNeighbours = 0

  // Get all neighbours
  const allNeighbours = getAllNeighbours(cellX, cellY)

  // Get the number of live neighours
  allNeighbours.forEach(neighbour => {
    if (boardState[neighbour.x][neighbour.y] === LIVE) {
      numLiveNeighbours++
    }
  })

  return numLiveNeighbours
}

export const getAllNeighbours = (cellX: number, cellY: number): { x: number, y: number }[] => {
  // Get all neighbours
  const allNeighbours = []
  // neighbours above
  if (cellY > 0) {
    if (cellX > 0) { allNeighbours.push({ x: cellX - 1, y: cellY - 1 }) }
    allNeighbours.push({ x: cellX, y: cellY - 1 })
    if (cellX < BOARD_SIZE.x - 1) { allNeighbours.push({ x: cellX + 1, y: cellY - 1 }) }
  }
  // neighbours in same row
  if (cellX > 0) { allNeighbours.push({ x: cellX - 1, y: cellY }) }
  if (cellX < BOARD_SIZE.x - 1) { allNeighbours.push({ x: cellX + 1, y: cellY }) }
  // neighbours below
  if (cellY < BOARD_SIZE.y - 1) {
    if (cellX > 0) { allNeighbours.push({ x: cellX - 1, y: cellY + 1 }) }
    allNeighbours.push({ x: cellX, y: cellY + 1 })
    if (cellX < BOARD_SIZE.x - 1) { allNeighbours.push({ x: cellX + 1, y: cellY + 1 }) }
  }
  return allNeighbours
}

export const getBoardInitialState = (boardSizeX: number, boardSizeY: number): BoardState => {
  let result = [] 
  for(let i=0; i<boardSizeX;i++){
    result.push(Array.from({length:boardSizeY},()=> (DEAD)))
  }
  return result
}
