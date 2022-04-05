import styled, { css } from 'styled-components'
import { CELL_STATE } from '../constants'
import { CellStateType } from '../interfaces'

interface ButtonType {
  state: CellStateType
}

export const CellOuter = styled.div<ButtonType>`
  width: 2rem;
  height: 2rem;
  margin: 2px;

  ${props => props.state === CELL_STATE.LIVE && css`
    background: #00BFFF;
    color: white;
  `}
`