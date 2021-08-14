import React, { useEffect } from 'react';

import MaterialTable from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import {PaperTableProps} from 'src/types'
import { useGlobalContextData } from '@store/globalContext';


function PaperTable ({classes, repTitle, children, paperRefTable}: PaperTableProps) {
  const { arrayRepos } = useGlobalContextData()
  useEffect(() => {
    if (paperRefTable && arrayRepos.length > 4) {
      paperRefTable.current?.scrollBy(0, paperRefTable.current.scrollHeight)
    }
  }, [arrayRepos])
  return (
    <>
      <Grid
        container
        alignItems='center'
        className={classes.divTitleTableRepos}
      >
        <Typography className={classes.titleTableRepos} variant='h3'>
          {repTitle}
        </Typography>
      </Grid>
      <TableContainer className={classes.tableContainer} ref={paperRefTable}>
        <MaterialTable stickyHeader aria-label="User atributes">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCellHead}>
                Nome do repositório
              </TableCell>
              <TableCell className={classes.tableCellHead}>
                Qtd de commit
              </TableCell>
              <TableCell className={classes.tableCellHead}>
                Msg Ultimo commit
              </TableCell>
              <TableCell className={classes.tableCellHead}>
                hash do ultimo commit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tBody} >
            {children}
          </TableBody>
        </MaterialTable>
      </TableContainer>
    </>
  )
}

export default PaperTable;
