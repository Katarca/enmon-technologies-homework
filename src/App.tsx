import { Login } from './scenes/Login'
import { PageNotFound } from './scenes/404'
import { ProtectedRoute } from './scenes/ProtectedRoute'
import { Route, Routes } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext'
import { createGlobalStyle } from 'styled-components'
import { styles } from './helpers/theme'
import { urls } from './helpers/urls'
import React from 'react'

export function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path={urls.login} element={<Login />} />
        <Route
          path={urls.inventoryMeters}
          element={<ProtectedRoute location='inventory-meters' />}
        />
        <Route
          path={urls.inventoryMetersDetail}
          element={<ProtectedRoute location='inventory-meter-detail' />}
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
    background: ${styles.colors.primaryGreen};
    color: ${styles.colors.white};
    }

    html {
    font-size: 62.5%;
    background-color: ${styles.colors.grey100};
    }

    body {
    box-sizing: border-box;
  }
`
