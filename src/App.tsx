import { Login } from './scenes/Login/context'
import { Navbar } from './components/Navbar'
import { PageNotFound } from './scenes/404'
import { ProtectedRoute } from './scenes/ProtectedRoute'
import { Route, Routes } from 'react-router-dom'
import { UserContextProvider } from './userContext/UserContext'
import { colors } from './helpers/theme'
import { createGlobalStyle } from 'styled-components'
import { urls } from './helpers/urls'
import React from 'react'

export function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Routes>
        <Route path={urls.login} element={<Login />} />
        <Route path={urls.inventoryMeters} element={<ProtectedRoute scene='inventoryMeters' />} />
        <Route
          path={urls.inventoryMetersDetail}
          element={<ProtectedRoute scene='inventoryMeterDetail' />}
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <GlobalStyle />
    </UserContextProvider>
  )
}

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: 'Poppins', sans-serif;
    }
    *::selection {
    background: ${colors.primaryGreen};
    color: ${colors.white};
    }

    html {
    font-size: 62.5%;
    background-color: ${colors.grey100};
    }

    body {
    box-sizing: border-box;
  }
`
