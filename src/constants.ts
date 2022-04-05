import { CellStateType } from './interfaces'

export const LIVE = 'LIVE' as CellStateType
export const DEAD = 'DEAD' as CellStateType
export const CELL_STATE: {} = {
  [LIVE]: LIVE,
  [DEAD]: DEAD,
}
export const BOARD_SIZE = {
  x: 6,
  y: 6
}

