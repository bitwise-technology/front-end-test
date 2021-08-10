import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import Nprogress from 'nprogress'
import InfiniteScroll from "react-infinite-scroll-component";

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import CloseIcon from '@material-ui/icons/Close'

import { getUsersSearc } from '@shared/useQuery'
import { USERS } from '@shared/graphql'
import { RenderSearchProps } from 'src/types'
import { useGlobalContextData } from '@store/globalContext'
import inputUseStyles from '@styles/components/InputStyles'
import IsLoading from '@components/IsLoading'

const  RenderSearch: React.FC<RenderSearchProps> = ({
  typeSearch,
  first,
  query,
  paperRefSearch,
  setTipeSearch
})  => {
  const { arrayUsers, setArrayUsers } = useGlobalContextData()
  const [after, setAfter] = useState('')
  const [nextPage, setNextPage] = useState(false)
  const classes = inputUseStyles()

  const objectReq =!!after && nextPage
  ? { first, query, after }
  : { first, query }

  const { loading, error, data } = getUsersSearc(objectReq, USERS)

  const handleAfter = (endCursor: string, hasNextPage: boolean) => {
    setTipeSearch('moreUsers')
    setAfter(endCursor)
    setNextPage(hasNextPage)
  }

  useEffect(() => {
    if (paperRefSearch && typeSearch === 'moreUsers') {
      paperRefSearch.current?.scrollBy(0, paperRefSearch.current.scrollHeight - 250)
    }
  }, [arrayUsers])

  useEffect(() => {
    if (!loading && !error && arrayUsers) {
      data.search.nodes.map((val: any, i: number) => {
          setArrayUsers((old: any) => [...old, val])
      })
    }
  }, [ loading, data ])


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

  const alternator = typeSearch === 'onChange' ? nodes : arrayUsers
  if (query === '') {
    return <></>
  } else {
    return (
      <Paper ref={paperRefSearch} className={classes.renderSearch} id="paperIdSearchUSers">
          <InfiniteScroll
          dataLength={alternator}
          next={() => handleAfter(endCursor, hasNextPage)}
          hasMore={hasNextPage}
          loader={
            <Grid container alignItems='center' justifyContent='center'>
              <IsLoading />
            </Grid>
          }
          endMessage={
            <Grid container justifyContent='center'>
              <CloseIcon color='primary'/>
              <Typography color='secondary' align='center' variant='body2' component='p' >
                Nenhum repositório a mais
              </Typography>
            </Grid>
          }
          scrollableTarget="paperIdSearchUSers"
          scrollThreshold={1}
        >
        <Grid container direction="column">
          {alternator.map((val: any) => (
            <Grid item key={uuidv4()} className={classes.linkUser}>
              <Link
                href={{
                  pathname: '/Search',
                  query: { login: val.login }
                }}
              >
                <a >
                  <Typography
                    paragraph
                    variant='body2'
                    color='primary'
                  >
                    {!!val.name?val.name:val.login}
                  </Typography>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
          </InfiniteScroll>
      </Paper>
    )
  }
}

export default RenderSearch
