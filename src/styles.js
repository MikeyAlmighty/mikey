import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: red;
  height: 100vh;
`

export const LHS = styled.div`
  background-color: ${({ theme }) => theme.dark};
  width: 65vw;
`

export const RHS = styled.div`
  background-color: ${({ theme }) => theme.light};
  width: 35vw;
`
