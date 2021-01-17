const light = {
  color: {
    primary: 'rebeccapurple',
    background: 'white',
  },
}

export type Color = typeof light

const dark: Color = {
  color: {
    primary: '#d793ec',
    background: '#333',
  },
}

const defaultTheme = {
  mq: '(min-width: 500px)',
}

const lightTheme = { ...defaultTheme, ...light }
export type Theme = typeof lightTheme
const darkTheme: Theme = { ...defaultTheme, ...dark }

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const
