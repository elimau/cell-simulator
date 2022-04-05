import React from 'react'
import { DEAD } from '../constants'
import { CellStateType } from '../interfaces'
import { CellOuter } from './Cell.styles'

interface Props {
  state: CellStateType
  onClick: () => void
}

const Cell = ({
  state = DEAD,
  onClick,
}: Props): JSX.Element => {
  return (
    <CellOuter state={state} onClick={onClick} />
  )
}

export default Cell
