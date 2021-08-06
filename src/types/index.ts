import { ApolloError } from '@apollo/client'
import { MouseEvent } from 'react'

export interface resQuery {
  loading: boolean
  error: ApolloError | undefined
  data: any
}

export interface RenderSearchProps {
  tipeSearch: string
  first: number
  query: string
  objectSearch: { after: string; nextPage: boolean; first?: number }
  handleAfter: (endCursor: string, hasNextPage: boolean) => void
}
