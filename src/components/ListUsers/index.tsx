import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import {v4 as uuidv4} from 'uuid'

import  ListItem  from '@material-ui/core/ListItem'
import  ListItemAvatar  from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid/Grid'
import IconButton from '@material-ui/core/IconButton/IconButton'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import Paper from '@material-ui/core/Paper'

import ListUsersStyles from '@styles/components/ListUserStyles'
import { getUsersSearc } from '@shared/useQuery'
import { USERS_SEARCH } from '@shared/graphql'
import { useGlobalContextData } from '@store/globalContext'
import {ListUsersProps} from 'src/types'

function ListUsers({
  after,
  nextPage,
  first,
  query,
  array,
  setArray,
  handleAfter
}: ListUsersProps) {

  const { setVisibleModal } = useGlobalContextData()
  const classes = ListUsersStyles()

  const objectReq =
  !!after && nextPage ? { first, query, after } : { first, query }
  const { loading, error, data } = getUsersSearc(objectReq, USERS_SEARCH)

  Router.events.on('beforeHistoryChange', () => {
    setArray([])
  })

  useEffect(() => {
    if (!loading && !error ) {
      data.search.nodes.map((val: any) => {
        setArray((old: any) => [...old, val])
      })
    }
  }, [data, loading])

  if(loading) {
    NProgress.start()
    return <>casa</>
  }

  if(error) {
    setVisibleModal(true)
    Router.push('/Search')
  }

  const {hasNextPage} = data?.search.pageInfo
  const {endCursor} = data?.search.pageInfo

  return (
    <Paper className={classes.paperUsersSearch}>
      {
        array.map((val) => (
          <div key={`${val.id}${uuidv4()}`}>
            <Link
                href={{
                  pathname: '/Search',
                  query: { login: val.login }
                }}
              >
              <a className={classes.linkUser}>
                <ListItem alignItems="flex-start" className={classes.listemItem}>
                  <ListItemAvatar>
                    <Avatar alt={`photo ${val.name}`} src={val.avatarUrl} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={val.name}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {val.login}
                        </Typography>
                        {!!val.bio ? ` - ${val.bio}`  : <span> no written bio</span>}
                      </>
                    }
                  />
                </ListItem>
              </a>
            </Link>
            <Divider />
          </div>
        ))
      }
      <>
        {
          hasNextPage && (
            <Grid container justifyContent='center'>
              <IconButton onClick={() => handleAfter(endCursor, hasNextPage)}>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Grid>
          )
        }
      </>
    </Paper>
  )
}

export default ListUsers;
