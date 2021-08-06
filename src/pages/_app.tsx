import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import MyTheme from '@styles/materialTheme'
import { ContextProvider } from '@store/globalContext'
import ClientOnly from '@components/ClientOnly'//ensure it's client-side
import client from '@services/apolloClient'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bitiwise</title>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <ClientOnly>
        <Container>
          <ApolloProvider client={client}>
            <ContextProvider>
              <MuiThemeProvider theme={MyTheme}>
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
