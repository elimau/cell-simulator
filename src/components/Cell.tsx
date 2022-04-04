import React from 'react'
import { CELL_STATE } from '../constants'
import { CellStateType } from '../interfaces'
import { CellOuter } from './Cell.styles'

interface Props {
  state: CellStateType
}

function Cell ({ state = CELL_STATE.DEAD as CellStateType }: Props) {
  return (
    <CellOuter state={state} />
  )
}

export default Cell
