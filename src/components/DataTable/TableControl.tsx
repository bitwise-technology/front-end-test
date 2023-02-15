import { Text, Flex, Tooltip, IconButton } from '@chakra-ui/react'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { Table as ReactTable } from '@tanstack/react-table'

import { Repository } from '@/types'

export interface TableControlProps {
  table: ReactTable<Repository>
}

export function TableControl(props: TableControlProps) {
  const { table } = props

  return (
    <Flex justifyContent='space-between' m={4} alignItems='center' gap='1rem'>
      <Flex>
        <Tooltip label='First Page' bg='brand.primary.700'>
          <IconButton
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            icon={<IoIosArrowDropleft />}
            h={6}
            w={6}
            mr={4}
            bg='transparent'
            color='brand.primary.300'
            aria-label={'First Page'}
          />
        </Tooltip>

        <Tooltip label='Previous Page' bg='brand.primary.700'>
          <IconButton
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            icon={<MdKeyboardArrowLeft />}
            h={6}
            w={6}
            color='brand.primary.500'
            aria-label={'Previous Page'}
          />
        </Tooltip>
      </Flex>

      <Flex alignItems='center'>
        <Text flexShrink='0'>
          Page{' '}
          <Text fontWeight='bold' as='span'>
            {table.getState().pagination.pageIndex + 1}
          </Text>{' '}
          of{' '}
          <Text fontWeight='bold' as='span'>
            {table.getPageCount()}
          </Text>
        </Text>
      </Flex>

      <Flex>
        <Tooltip label='Next Page' bg='brand.primary.700'>
          <IconButton
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            icon={<MdKeyboardArrowRight />}
            h={6}
            w={6}
            color='brand.primary.500'
            aria-label={'Next Page'}
          />
        </Tooltip>

        <Tooltip label='Last Page' bg='brand.primary.700'>
          <IconButton
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            icon={<IoIosArrowDropright />}
            h={6}
            w={6}
            ml={4}
            bg='transparent'
            color='brand.primary.300'
            aria-label={'Last Page'}
          />
        </Tooltip>
      </Flex>
    </Flex>
  )
}
