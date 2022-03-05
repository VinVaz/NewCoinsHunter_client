import React from 'react'
import Head from 'next/head'
import { SnackbarProvider } from 'notistack'
import { ThemeProvider } from '@mui/material/styles'
import { StoreProvider } from '../utils/Store'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '/createEmotionCache'
import themes from '/themes/index'

const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <>
        <SnackbarProvider
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <StoreProvider>
            <ThemeProvider theme={themes}>
              <Component {...pageProps} />
            </ThemeProvider>
          </StoreProvider>
        </SnackbarProvider>
      </>
    </CacheProvider>
  )
}
