import { NextFont } from 'next/dist/compiled/@next/font'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.colors.gray_100};

    color: black;

    scroll-behavior: smooth;
    overflow: hidden;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;

    font-family: 'Inter', sans-serif;
  }

  a{ 
    text-decoration: none !important;
  }

  img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    pointer-events: none;
  }

  ::-webkit-scrollbar {
      width: 3px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.gray_400};
  }
  ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.gray_600};
      border-radius: 50px;
  }

  ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.0);
  }
`

export default GlobalStyle
