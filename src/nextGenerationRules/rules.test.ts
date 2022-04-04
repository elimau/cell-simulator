import { 
  sum,
  // calculateCellValue, 
} from './rules'

describe("Next Generation Rules", () => {
  it('sum', () => {
    expect(sum(1, 2)).toEqual(3)
    expect(sum(2, 2)).toEqual(4)
  })
  // it('rule 1 - a cell with fewer than two live neighbours dies under-population', () => {
  //   expect(sum(1, 2)).toEqual(3)
  //   expect(sum(2, 2)).toEqual(4)
  // })
})
