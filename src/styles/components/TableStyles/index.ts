import {makeStyles} from '@material-ui/core/styles'

const tableStyles = makeStyles(theme => ({
  paperTable: {
    minHeight: 450,
  },
  divTitleTableRepos: {
    height: 95,
    padding: 32
  },
  titleTableRepos: {
    color: theme.palette.primary.dark,
    fontSize: 20,
  },
  tableContainer: {
    maxHeight: 300
  },
  tableCellHead: {
    backgroundColor: '#fff',
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
  tableRow: {
    '&:hover': {
      backgroundColor: theme.palette.info.light
    }
  },
  loading: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center'
  }
}))

export default tableStyles
