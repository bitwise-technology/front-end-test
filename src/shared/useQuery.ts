import { DocumentNode, useQuery } from '@apollo/client'
import { resQuery } from 'src/types'

export function getUsersSearc(
  { ...variables },
  typeData: DocumentNode
): resQuery {
  const { loading, error, data } = useQuery(typeData, {
    variables: {
      ...variables
    }
  })
  return {
    loading,
    error,
    data
  }
}
