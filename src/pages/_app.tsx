import React, { ChangeEvent, useState } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import {createTheme} from '@styles/materialTheme'
import { ContextProvider, useGlobalContextData } from '@store/globalContext'
import ClientOnly from '@components/ClientOnly'//ensure it's client-side
import client from '@services/apolloClient'

function MyApp({ Component, pageProps }: AppProps) {
  const {setChangeTheme, changeTheme} = useGlobalContextData()
  const [cTheme, setCTheme] = useState(changeTheme)
  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    setCTheme(e.target.checked)
  };

  return (
    <>
      <Head>
        <title>Bitiwise</title>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <ClientOnly>
        <Container>
          <ApolloProvider client={client}>
            <ContextProvider toggleTheme={toggleTheme}>
              <MuiThemeProvider theme={createTheme(cTheme)}>
                <CssBaseline />
                <Component {...pageProps} />
              </MuiThemeProvider>
            </ContextProvider>
          </ApolloProvider>
        </Container>
      </ClientOnly>
    </>
  )
}
export default MyApp
