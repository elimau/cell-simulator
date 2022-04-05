import styled from 'styled-components'

export const GameOuter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

export const GameTitle = styled.h1`
`

export const ButtonOuter = styled.div`
  display: flex;
  flex-direction: row;
`

export const Button = styled.button`
  all: unset;
  margin: 1rem;
  padding: 0.25rem 1rem;
  color: #F8F8FF;
  background: #1E90FF;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #0E70DF;
  }
`
