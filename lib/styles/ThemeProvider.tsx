import React from 'react'
import { themes } from './theme'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'

const ThemeProvider = ({ children }) => {
  const { value } = useDarkMode(false, { storageKey: null, onChange: null })
  const theme = themes[value ? 'dark' : 'light']

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const body = (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  )

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>
  }

  return body
}

export { ThemeProvider }
