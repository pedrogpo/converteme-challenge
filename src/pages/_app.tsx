import 'react-toastify/dist/ReactToastify.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../core/constants/theme'

import GlobalStyle from '~/styles/global'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

const interFont = Inter({
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
})

function ConecteMe({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <style jsx global>{`
        html {
          font-family: ${interFont.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default ConecteMe
