import { useEffect } from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import Nprogress from 'nprogress'

import Grid from '@material-ui/core/Grid'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import { getUsersSearc } from '@shared/useQuery'
import { USERS } from '@shared/graphql'
import { RenderSearchProps } from 'src/types'
import { useGlobalContextData } from '@store/globalContext'
import inputUseStyles from '@styles/components/InputUseStyles'
import IsLoading from '@components/IsLoading'

export default function RenderSearch({
  tipeSearch,
  first,
  query,
  handleAfter,
  objectSearch
}: RenderSearchProps) {
  const { arrayUsers, setArrayUsers } = useGlobalContextData()

  const { after, nextPage } = objectSearch
  const objectReq =
    !!after && nextPage ? { first, query, after } : { first, query }
  const { loading, error, data } = getUsersSearc(objectReq, USERS)

  useEffect(() => {
    if (!loading && !error && arrayUsers) {
      data.search.nodes.map((val: any) => {
        setArrayUsers((old: any) => [...old, val])
      })
    }
  }, [data, loading])

  const classes = inputUseStyles()

  if (loading) {
    Nprogress.start()
    return (
      <IsLoading className={classes.renderSearch} />
    )
  }
  if (error) {
    Nprogress.done()
    return <></>
  }

  Nprogress.done()

  const { endCursor } = data.search.pageInfo
  const { hasNextPage } = data.search.pageInfo
  const { nodes } = data.search

  const alternator = tipeSearch === 'onChange' ? nodes : arrayUsers

  if (query === '') {
    return <></>
  } else {
    return (
      <Paper className={classes.renderSearch}>
        <Grid container direction="column">
          {alternator.map((val: any) => (
            <Grid item key={uuidv4()}>
              <Link
                href={{
                  pathname: '/Search',
                  query: { login: val.login }
                }}
              >
                <a className={classes.linkUser}>
                  <Typography paragraph variant='body2' color='primary'>{val.name}</Typography>
                </a>
              </Link>
            </Grid>
          ))}

        </Grid>
        {hasNextPage && (
          <Grid container justifyContent='center'>
            <IconButton onClick={e => handleAfter(endCursor, hasNextPage)}>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Grid>
        )}
      </Paper>
    )
  }
}
