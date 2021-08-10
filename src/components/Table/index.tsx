import React, { useState, useEffect, useRef, MutableRefObject } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { v4 as uuidv4 } from 'uuid'

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import AddIcon from '@material-ui/icons/Add'

import { getUsersSearc } from '@shared/useQuery'
import { DATA_REPOS } from '@shared/graphql'
import { useGlobalContextData } from '@store/globalContext'
import tableStyles from '@styles/components/TableStyles'
import TableContain from './TableContain'
import IconButton from '@material-ui/core/IconButton/IconButton'
import { useMemo } from 'react'

interface TableProps {
  login: string
  paperRefTable: MutableRefObject<HTMLDivElement | null>
}

const Table: React.FC<TableProps> = ({ login, paperRefTable  }) => {
  const { setArrayRepos, arrayRepos } = useGlobalContextData()
  const [repTitle, setRepTitle] = useState('Repositórios')
  const [after, setAfter] = useState('')
  const [nextPage, setNextPage] = useState(false)
  const objectReq = !!after && nextPage ? { login, after } : { login }
  const { loading, error, data } = getUsersSearc(objectReq, DATA_REPOS)
  const classes = tableStyles()

  const handleAfter = (endCursor: string, hasNextPage: boolean) => {
    setAfter(endCursor)
    setNextPage(hasNextPage)
  }

  Router.events.on('beforeHistoryChange', () => {
    setArrayRepos([])
  })

  useEffect(() => {
    if (paperRefTable && arrayRepos.length > 4) {
      console.log(paperRefTable)
      paperRefTable.current?.scrollBy(0,450)
    }
  }, [arrayRepos])

  useEffect(() => {
    if (!loading && !error ) {
      data.user.repositories.nodes.map((val: any) => {
        setArrayRepos((old: any) => [...old, val])
      })
    }
  }, [data, loading])

  if (loading) {
    NProgress.start()
    return (
    <Paper elevation={0} className={classes.paperTable}>
      <TableContain classes={classes} repTitle={repTitle}>
      </TableContain>
    </Paper>
    )
  }

  if (error) return <p>Error :(</p>

  NProgress.done()

  const { endCursor } = data.user.repositories.pageInfo
  const { hasNextPage } = data.user.repositories.pageInfo

  return (
    <Paper elevation={1} ref={paperRefTable} className={classes.paperTable} >
        <TableContain
          classes={classes}
          repTitle={repTitle}
        >
          {arrayRepos?.map((val: any) => (
            <TableRow
              key={uuidv4()}
              onClick={() => setRepTitle(val.name)}
              className={classes.tableRow}
            >
              <TableCell className={classes.tableCellBody}>
                {val.name}
              </TableCell>
              <TableCell className={classes.tableCellBody}>
                {val.object ? val.object.history.totalCount : 'nenhum commit'}
              </TableCell>
              <TableCell className={classes.tableCellBody}>
                {val.object
                  ? val.object.history.nodes[0].messageHeadline
                  : 'nenhuma mensagem'}
              </TableCell>
              <TableCell className={classes.tableCellBody}>
                {val.object ? val.object.history.nodes[0].oid : 'nenhuma hash'}
              </TableCell>
            </TableRow>
          ))}
        </TableContain>
      {hasNextPage &&
        <Grid container justifyContent='center'>
          <IconButton
            onClick={() => handleAfter(endCursor, hasNextPage)}
            className={classes.moreButtonIcon}
          >
            <AddIcon />
          </IconButton>
        </Grid>
      }
    </Paper>
  )
}

export default Table
