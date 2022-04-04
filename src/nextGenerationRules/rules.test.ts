import {
  sum,
  calculateCellValue,
} from './rules'
import { CellStateType } from '../interfaces'
import { CELL_STATE } from '../constants'

const LIVE = CELL_STATE.LIVE as CellStateType
const DEAD = CELL_STATE.DEAD as CellStateType
describe("Next Generation Rules", () => {
  it('sum', () => {
    expect(sum(1, 2)).toEqual(3)
    expect(sum(2, 2)).toEqual(4)
  })
  it('rule 1 - A Cell with fewer than two live neighbours dies of under-population.', () => {
    expect(calculateCellValue(LIVE, 0)).toEqual(DEAD)
    expect(calculateCellValue(LIVE, 1)).toEqual(DEAD)
  })
  it('rule 2 - A Cell with 2 or 3 live neighbours lives on to the next generation.', () => {
    expect(calculateCellValue(LIVE, 2)).toEqual(LIVE)
    expect(calculateCellValue(LIVE, 3)).toEqual(LIVE)
  })
  it('rule 3 - A Cell with more than 3 live neighbours dies of overcrowding.', () => {
    expect(calculateCellValue(LIVE, 4)).toEqual(DEAD)
    expect(calculateCellValue(LIVE, 5)).toEqual(DEAD)
    expect(calculateCellValue(LIVE, 6)).toEqual(DEAD)
    expect(calculateCellValue(LIVE, 7)).toEqual(DEAD)
    expect(calculateCellValue(LIVE, 8)).toEqual(DEAD)
  })
  it('rule 4 - An empty Cell with exactly 3 live neighbours "comes to life".', () => {
    expect(calculateCellValue(DEAD, 0)).toEqual(DEAD)
    expect(calculateCellValue(DEAD, 1)).toEqual(DEAD)
    expect(calculateCellValue(DEAD, 2)).toEqual(DEAD)
    expect(calculateCellValue(DEAD, 3)).toEqual(LIVE)
    expect(calculateCellValue(DEAD, 4)).toEqual(DEAD)
    expect(calculateCellValue(DEAD, 5)).toEqual(DEAD)
    expect(calculateCellValue(DEAD, 6)).toEqual(DEAD)
    expect(calculateCellValue(DEAD, 7)).toEqual(DEAD)
    expect(calculateCellValue(DEAD, 8)).toEqual(DEAD)
  })
  it.skip('TODO rule 4 - A Cell who "comes to life" outside the board should wrap at the other side of the board.', () => {
    // TODO
  })

})
