import {makeStyles} from '@material-ui/core/styles'

const tableStyles = makeStyles(theme => ({
  paperTable: {
    height: '450px',
  },
  divTitleTableRepos: {
    height: 95,
    padding: 32
  },
  titleTableRepos: {
    color: theme.palette.secondary.light,
    fontSize: 20,
  },
  tableContainer: {
    maxHeight: 300
  },
  tBody: {
    overflow: 'scroll'
  },
  tableCellHead: {
    color: theme.palette.secondary.light,
    width: '25%',
    '&:first-child': {
      padding: 30,
    }
  },
  tableCellBody: {
    height:  70,
    color: theme.palette.secondary.light,
  },
  moreButtonIcon: {
    color: `${theme.palette.primary.main} !important`,
    '&:hover' : {
      backgroundColor: theme.palette.info.light
    }
  },
  tableRow: {
    '&:hover': {
      backgroundColor: theme.palette.info.light
    }
  },
  loading: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center'
  },
  '@media screen and (max-width: 960px)': {
    titleTableRepos: {
      fontSize: 16,
    },
    tableCellHead: {
      width: '15%',
    },
  }
}))

export default tableStyles
