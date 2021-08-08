import {makeStyles} from '@material-ui/core/styles'

const ListUsersStyles = makeStyles(theme => ({
  paperUsersSearch: {
    height: '60vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  inline: {
    display: 'inline'
  },
  listemItem: {
    '&:hover':{
      backgroundColor: theme.palette.info.light
    }
  },
  linkUser: {
    textDecoration: 'none',
    color: theme.palette.primary.light,
    '&:visited': {
      color: theme.palette.secondary.light
    }
  }
}))

export default ListUsersStyles
