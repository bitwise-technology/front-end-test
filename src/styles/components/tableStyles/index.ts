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
    color: '#3D5879',
    fontSize: 20,
  },
  tableContainer: {
    maxHeight: 300
  },
  tableCellHead: {
    backgroundColor: '#fff',
    color: '#657FA0',
    width: '25%',
    '&:first-child': {
      padding: 30,
    }
  },
  tableCellBody: {
    height:  70,
    color: '#657FA0',
  },
  tableRow: {
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  loading: {

  }
}))

export default tableStyles
