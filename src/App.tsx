import { InventoryMeters } from './components/InventoryMeters'
import { Login } from './components/Login'
import { Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { urls } from './helpers/urls'
import React from 'react'
import styled from 'styled-components'

export function App() {
  return (
    <Div_App>
      <Routes>
        <Route path={urls.login} element={<Login />} />
        <Route path={urls.inventoryMeters} element={<InventoryMeters />} />
      </Routes>
      <GlobalStyle />
    </Div_App>
  )
}

const Div_App = styled.div`
  min-height: 100vh;
`

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
