import { Repository } from '@/types'
import { Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react'

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { TableControl } from './TableControl'
import { useRepositoryColumns } from './RepositoryColumns'

interface ReactTableProps<> {
  data: Repository[]
}

export function DataTable({ data }: ReactTableProps) {
  const columns = useRepositoryColumns()

  const table = useReactTable({
    data,
    columns,
    initialState: { pagination: { pageSize: 6 } },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <>
      <Table boxShadow='1px 2px 6px rgba(0, 0, 0, 0.12)'>
        <Thead>
          <Tr>
            <Th colSpan={1} border='none' padding='2rem'>
              <Text fontWeight='bold' fontSize='1.5rem'>
                Repositórios
              </Text>
            </Th>
          </Tr>

          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <Th
                  key={header.id}
                  colSpan={header.colSpan}
                  border='none'
                  paddingInline={0}
                  pl={index === 0 ? '2rem' : '1rem'}
                  pr={index === headerGroup.headers.length - 1 ? '2rem' : '0'}
                >
                  <Text color='brand.secundary.300' fontSize={{ base: '0.75rem', lg: '1.125rem' }}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </Text>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>

        <Tbody>
          {table.getRowModel().rows.map((row, indexR) => (
            <Tr key={row.id} bg={indexR % 2 === 0 ? 'white' : 'brand.secondary.5'}>
              {row.getVisibleCells().map((cell, indexC) => (
                <Td
                  key={cell.id}
                  maxW={{ base: '1rem', sm: '3rem', lg: ['20%', '10%', '25%', '45%'][indexC] }}
                  w={{ base: '1rem', sm: '3rem', lg: ['20%', '10%', '25%', '45%'][indexC] }}
                  isTruncated
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>

      <TableControl table={table} />
    </>
  )
}
