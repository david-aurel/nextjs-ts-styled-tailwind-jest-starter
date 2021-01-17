import React from 'react'
import { ThemeProvider } from '../lib/styles/ThemeProvider'
import { GlobalStyle } from '../lib/styles/global'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
