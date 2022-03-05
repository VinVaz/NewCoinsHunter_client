import { createTheme } from '@mui/material/styles'
import typography from './typography'

const theme = () => {
  const themeOptions = {
    typography: { ...typography }
  }

  const themes = createTheme(themeOptions)

  return themes
}

export default theme
