import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation ($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        blocked
        confirmed
        email
        id
        role {
          description
          id
          name
          type
        }
        username
      }
    }
  }
`
