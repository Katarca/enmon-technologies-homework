import { createGlobalStyle } from 'styled-components'
import React from 'react'

export function App() {
  return (
    <div>
      <GlobalStyle />
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    }

    html {
    font-size: 62.5%;
    }

    body {
    box-sizing: border-box;
  }
`
