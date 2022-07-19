import createTheme from '@mui/material/styles'
import typography from './typography'

const theme = () => {
  const themeOptions = {
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            elevation: 0,
            variant: 'outlined'
          }
        }
      },
      MuiPopover: {
        styleOverrides: {
          root: {
            elevation: 0,
            variant: 'outlined'
          }
        }
      }
    },
    typography: { ...typography }
  }

  const themes = createTheme(themeOptions)

  return themes
}

export default theme
