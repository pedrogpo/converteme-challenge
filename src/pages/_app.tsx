import 'react-toastify/dist/ReactToastify.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../core/constants/theme'

import GlobalStyle from '~/styles/global'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

const interFont = Inter({
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function ConecteMe({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider theme={defaultTheme}>
      <style jsx global>{`
        html {
          font-family: ${interFont.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
      <ToastContainer />
    </ThemeProvider>
  )
}

export default ConecteMe
