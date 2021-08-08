import {makeStyles} from '@material-ui/core/styles'

const searchMaterialStyles = makeStyles(theme => ({
  mainSearch: {
    minHeight: 650,
  },
  containerAvatarRepos: {
    marginBottom: 45
  },
  avatar: {
    maxHeight: 120,
    maxWidth: 120,
    boxShadow: 'drop-shadow(0px 2px 4px rgba(84, 84, 89, 0.14))',
    marginRight: 32,
    borderRadius: 4,
  },
  infoUser: {
    width: '20%'
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#657FA0',
    marginBottom: 15
  },
  containerSquare: {
    width: 96,
    height: 64,
    backgroundColor: '#fff',
    boxShadow: '0px 2px 38px rgba(84, 84, 89, 0.14)',
    borderRadius: 4,
  },
  retangle: {
    width: '3.22%',
    height: '25%',
    borderRadius: '0 3px 3px 0',
    backgroundColor: theme.palette.primary.main,
  },
  repositoriesSquare: {
    fontSize: '11px',
    lineHeight: '13px',
    color: '#878790'
  },
  strongCrepo: {
  },
  containerRepoCount: {
    width: '80%',
    paddingLeft: '10px'
  }
}))

export default searchMaterialStyles
