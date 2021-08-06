import React, { useState, useEffect } from 'react'
import NProgress from 'nprogress'
import { v4 as uuidv4 } from 'uuid'

//Material import
import MaterialTable from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import { getUsersSearc } from '@shared/useQuery'
import { DATA_REPOS } from '@shared/graphql'
import { useGlobalContextData } from '@store/globalContext'
import tableStyles from '@styles/components/tableStyles'
import IsLoading from '@components/IsLoading'

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

  useEffect(() => {
    if (!loading && !error && arrayRepos) {
      data.user.repositories.nodes.map((val: any) => {
        setArrayRepos((old: any) => [...old, val])
      })
    }
    // console.log(arrayRepos)
  }, [data, loading])


  const handleAfter = (endCursor: string, hasNextPage: boolean) => {
    setAfter(endCursor)
    setNextPage(hasNextPage)
  }
  if (loading) {
    NProgress.start()
    return (
      <Paper elevation={1} className={classes.paperTable}>
        <Grid
          container
          alignItems='center'
          className={classes.divTitleTableRepos}
        >
          <Typography className={classes.titleTableRepos} variant='h3'>{repTitle}</Typography>
        </Grid>
        <TableContainer className={classes.tableContainer}>
          <MaterialTable stickyHeader aria-label="User atributes">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCellHead}>Nome do repositório</TableCell>
                <TableCell className={classes.tableCellHead}>Qtd de commit</TableCell>
                <TableCell className={classes.tableCellHead}>Msg Ultimo commit</TableCell>
                <TableCell className={classes.tableCellHead}>hash do ultimo commit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <IsLoading className={classes.loading}/>
            </TableBody>
          </MaterialTable>
        </TableContainer>
      </Paper>
    )
  }
  if (error) return <p>Error :(</p>

  NProgress.done()
  const { endCursor } = data.user.repositories.pageInfo
  const { hasNextPage } = data.user.repositories.pageInfo

  return (
    <Paper elevation={1} className={classes.paperTable}>
      <Grid
        container
        alignItems='center'
        className={classes.divTitleTableRepos}
      >
        <Typography className={classes.titleTableRepos} variant='h3'>{repTitle}</Typography>
      </Grid>
      <TableContainer className={classes.tableContainer}>
        <MaterialTable stickyHeader aria-label="User atributes">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCellHead}>Nome do repositório</TableCell>
              <TableCell className={classes.tableCellHead}>Qtd de commit</TableCell>
              <TableCell className={classes.tableCellHead}>Msg Ultimo commit</TableCell>
              <TableCell className={classes.tableCellHead}>hash do ultimo commit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </MaterialTable>
      </TableContainer>
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
