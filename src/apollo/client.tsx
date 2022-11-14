import { ApolloClient, InMemoryCache } from '@apollo/client'

const GQL_API = process.env.REACT_APP_GQL_API_URL

export const client = new ApolloClient({
  uri: GQL_API,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})
