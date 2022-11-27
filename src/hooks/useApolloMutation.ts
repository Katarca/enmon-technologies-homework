import { DefaultContext, DocumentNode, useMutation } from '@apollo/client'

export const useApolloMutation = <Results, Args>(args: {
  mutation: DocumentNode
  variables: Args
  context?: DefaultContext
  onCompleted?: (data: Results) => void
}) => {
  const [mutationFunction, { data, loading, error }] = useMutation<Results, Args>(args.mutation, {
    variables: args.variables,
    context: args.context,
    onCompleted: args.onCompleted,
  })

  return { mutationFunction, data, loading, error }
}
