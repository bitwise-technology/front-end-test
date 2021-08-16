import {makeStyles} from '@material-ui/core/styles'

const ListUsersStyles = makeStyles(theme => ({
  paperUsersSearch: {
    height: '60vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  inline: {
    display: 'inline',
  },
  listemItem: {
    '&:hover':{
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.info.light,
    }
  },
  linkUser: {
    textDecoration: 'none',
    color: theme.palette.secondary.light,
    '&:visited': {
      color: theme.palette.primary.main
    }
  },
  iconButtonLister: {
    color: `${theme.palette.primary.main} !important`,
    '&:hover' : {
      backgroundColor: theme.palette.info.light
    }
  }
}))

export default ListUsersStyles
