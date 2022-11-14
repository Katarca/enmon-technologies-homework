import { ApolloProvider } from '@apollo/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { client } from './apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)
