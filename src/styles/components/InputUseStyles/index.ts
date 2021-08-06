import { makeStyles } from '@material-ui/core/styles'

const inputUseStyles = makeStyles(theme => ({
  inputContainer: {
    position: 'relative'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    height: '100%'
  },
  inputContent: {
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: theme.spacing(2),
    height: 'fit-content'
  },
  divButton: {
    height: '48px',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  },
  renderSearch: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: 'calc(100% + 5px)',
    overflow: 'auto',
    height: '160px',
    width: '100%',
    padding: theme.spacing(1),
  },
  linkUser: {
    textDecoration: 'none',
    lineHeight: '5px'
  },
}))

export default inputUseStyles
