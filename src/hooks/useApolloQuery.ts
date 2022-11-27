import { DocumentNode, useQuery } from '@apollo/client'

export const useApolloQuery = <Results, Args>(
  query: DocumentNode,
  variables: Args,
  jwtToken: string
) => {
  const { data, loading, error, refetch, networkStatus } = useQuery<Results, Args>(query, {
    variables: variables,
    notifyOnNetworkStatusChange: true,
    context: {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    },
  })

  return { data, loading, error, refetch, networkStatus }
}
