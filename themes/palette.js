import { createTheme } from '@mui/material/styles'

const palette = (darkMode) => {
  const mode = darkMode ? 'dark' : 'light'
  const themeOptions = {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#a0005e'
            },
            secondary: {
              main: '#4c8ebc'
            }
          }
        : {
            primary: {
              main: '#2e2e2e'
            },
            secondary: {
              main: '#525454'
            }
          })
    }
  }
  const themes = createTheme(themeOptions)

  return themes
}

export default palette
