import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { v4 as uuidv4 } from 'uuid'

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import IconButton from '@material-ui/core/IconButton'

import { getUsersSearc } from '@shared/useQuery'
import { DATA_REPOS } from '@shared/graphql'
import { useGlobalContextData } from '@store/globalContext'
import tableStyles from '@styles/components/TableStyles'
import IsLoading from '@components/IsLoading'
import TableContain from './TableContain'

interface TableProps {
  login: string
}

function Table({ login }: TableProps) {
  const [repTitle, setRepTitle] = useState('Repositórios')
  const { setArrayRepos, arrayRepos } = useGlobalContextData()
  const [after, setAfter] = useState('')
  const [nextPage, setNextPage] = useState(false)

  const classes = tableStyles()

  const objectReq = !!after && nextPage ? { login, after } : { login }

  const { loading, error, data } = getUsersSearc(objectReq, DATA_REPOS)

  Router.events.on('beforeHistoryChange', () => {
    setArrayRepos([])
  })

  useEffect(() => {
    if (!loading && !error ) {
      data.user.repositories.nodes.map((val: any) => {
        setArrayRepos((old: any) => [...old, val])
      })
    }
  }, [data, loading])


  const handleAfter = (endCursor: string, hasNextPage: boolean) => {
    setAfter(endCursor)
    setNextPage(hasNextPage)
  }

  if (loading) {
    NProgress.start()
    return (
    <Paper elevation={0} className={classes.paperTable}>
      <TableContain classes={classes} repTitle={repTitle}>
      </TableContain>
      <IsLoading className={classes.loading}/>
    </Paper>
    )
  }

  if (error) return <p>Error :(</p>

  NProgress.done()

  const { endCursor } = data.user.repositories.pageInfo
  const { hasNextPage } = data.user.repositories.pageInfo

  return (
    <Paper elevation={1} className={classes.paperTable}>
      <TableContain classes={classes} repTitle={repTitle}>
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
      {hasNextPage && (
        <Grid container justifyContent='center'>
          <IconButton onClick={() => handleAfter(endCursor, hasNextPage)}>
            <KeyboardArrowDownIcon />
          </IconButton>
        </Grid>
      )}
    </Paper>
  )
}

export default Table
