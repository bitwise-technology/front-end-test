import { Dispatch, ReactNode, SetStateAction } from 'react';
import { ApolloError } from '@apollo/client'
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { TableCellProps } from '@material-ui/core/TableCell';
import { TableRowTypeMap } from '@material-ui/core/TableRow';

export interface ContextData {
  visibleModal: boolean
  setVisibleModal: Dispatch<SetStateAction<boolean>>
  arrayRepos: any
  setArrayRepos: Dispatch<SetStateAction<any>>
  arrayUsers: any
  setArrayUsers: Dispatch<SetStateAction<any>>
}

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

export interface ListUsersProps {
  after: string
  nextPage: boolean
  first: number
  query: string
  array: Array<any>
  setArray: Dispatch<SetStateAction<Array<any>>>
  handleAfter: (endCursor: string, hasNextPage: boolean) => void
}

export interface PaperTableProps {
  classes: ClassNameMap
  repTitle: string
  children: OverridableComponent<TableRowTypeMap<TableCellProps>> | ReactNode
}
