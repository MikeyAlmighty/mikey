import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Container, LHS, RHS } from './styles'
import { theme } from './theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <LHS />
      <RHS />
    </Container>
  </ThemeProvider>
)

export default App
