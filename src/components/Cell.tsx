import React from 'react'
import { CELL_STATE } from '../constants'
import { CellStateType } from '../interfaces'
import { CellOuter } from './Cell.styles'

interface Props {
  state: CellStateType
  onClick: () => void
}

const Cell = ({
  state = CELL_STATE.DEAD as CellStateType,
  onClick,
}: Props): JSX.Element => {
  return (
    <CellOuter state={state} onClick={onClick} />
  )
}

export default Cell
