import React from 'react'
import Head from 'next/head'
import { useAppSelector, useAppDispatch } from '../../../hooks'
import {
  USER_SETTINGS_DARK_MODE_ON,
  USER_SETTINGS_DARK_MODE_OFF
} from '../../../store/types'
import Footer from './Footer'
import Header from './Header'
import Cookies from 'js-cookie'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import palette from '/themes/palette'
import { Grid, Box } from '@mui/material'

export default function Layout({ title, description, children }) {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector((state) => state.settings.darkMode)

  const darkModeChangeHandler = () => {
    Cookies.set('darkMode', !darkMode ? 'ON' : 'OFF')
    dispatch({
      type: darkMode ? USER_SETTINGS_DARK_MODE_OFF : USER_SETTINGS_DARK_MODE_ON
    })
  }

  return (
    <React.Fragment>
      <Head>
        <title>{title ? `${title} - Makeuplinks` : 'Makeuplinks'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={palette(darkMode)}>
        <CssBaseline />
        <Box>
          <Grid container>
            <Grid item xs={12}>
              <Header
                darkMode={darkMode}
                darkModeChangeHandler={darkModeChangeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              {/* Main content */}
              <Box>{children}</Box>

              {/* End main content */}
            </Grid>
            <Grid item xs={12}>
              {/* Footer */}
              <Footer />
              {/* End footer */}
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  )
}
