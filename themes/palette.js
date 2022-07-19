import { createTheme } from '@mui/material/styles'

const palette = (darkMode) => {
  const mode = darkMode ? 'dark' : 'light'
  const themeOptions = {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#b4b7d9',
              light: '#bec3e6',
              dark: '#a3a9cb',
              contrastText: '#fff'
            },
            secondary: {
              main: '#6c828d',
              light: '#87a5af',
              dark: '#405159',
              contrastText: '#fff'
            },
            error: {
              main: '#ff758f',
              light: '#ff8fa5',
              dark: '#ff5977',
              contrastText: '#000'
            },
            warning: {
              main: '#fdd981',
              light: '#fee89e',
              dark: '#efc968',
              contrastText: '#000'
            },
            info: {
              main: '#9ce7f1',
              light: '#baf0fa',
              dark: '#83d4e4',
              contrastText: '#000'
            },
            success: {
              main: '#65feeb',
              light: '#81fdf5',
              dark: '#4fefd4',
              contrastText: '#000'
            },
            grey: {
              50: '#fafafa',
              100: '#f5f5f5',
              200: '#eeeeee',
              300: '#e0e0e0',
              400: '#bdbdbd',
              500: '#9e9e9e',
              600: '#757575',
              700: '#616161',
              800: '#424242',
              900: '#212121',
              A100: '#f5f5f5',
              A200: '#eeeeee',
              A400: '#bdbdbd',
              A700: '#616161'
            },
            text: {
              primary: 'rgba(0,0,0,0.87)',
              secondary: 'rgba(0,0,0,0.6)',
              disabled: 'rgba(0,0,0,0.38)'
            },
            divider: 'rgba(0,0,0,0.12)',
            background: {
              paper: '#fff',
              default: '#fff'
            },
            action: {
              active: 'rgba(0,0,0,0.54)',
              hover: 'rgba(0,0,0,0.04)',
              hoverOpacity: '0.04',
              selected: 'rgba(0,0,0,0.08)',
              selectedOpacity: '0.08',
              disabled: 'rgba(0,0,0,0.26)',
              disabledBackground: 'rgba(0,0,0,0.12)',
              disabledOpacity: '0.38',
              focus: 'rgba(0,0,0,0.12)',
              focusOpacity: '0.12',
              activatedOpacity: '0.12'
            }
          }
        : {
            primary: {
              main: '#2e1b27'
            },
            secondary: {
              main: '#4c3f5f'
            },
            background: {
              default: '#000'
            }
          })
    }
  }
  const themes = createTheme(themeOptions)

  return themes
}

export default palette
