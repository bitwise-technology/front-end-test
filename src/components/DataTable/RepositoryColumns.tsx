import { ColumnDef } from '@tanstack/react-table'
import { Repository } from '@/types'
import { useMemo } from 'react'

export function useRepositoryColumns() {
  const columns = useMemo<ColumnDef<Repository>[]>(
    () => [
      {
        id: 'name',
        accessorKey: 'name',
        header: () => 'Nome do repositorio',
      },
      {
        id: 'commitsCount',
        accessorKey: 'commitsCount',
        header: () => 'Qtd de commit',
      },
      {
        id: 'lastCommitMessage',
        accessorKey: 'lastCommitMessage',
        header: () => 'Msg último commit',
      },
      {
        id: 'lastCommitHash',
        accessorKey: 'lastCommitHash',
        header: () => 'hash do último commit',
      },
    ],
    [],
  )

  return columns
}
