import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.primary};
  }
`

export { GlobalStyle }
