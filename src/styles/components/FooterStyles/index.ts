import { makeStyles } from '@material-ui/core/styles'

const footerMaterialStyles = makeStyles(theme => ({
  footer: {
    width: '100vw',
    minHeight: 495,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.info.main
  },
  footerContainer: {
    minHeight: 400,
    padding: '5% 15.1% 0 15.1%'
  },
  logoFooter: {
    marginTop: 20,
    height: '100%'
  },
  divider:{
    minHeight: 3,
    minWidth: '100%',
    backgroundColor: '#A51C92'
  },
  topBack: {
    textDecoration: 'none',
    color: theme.palette.info.main,
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.success.main
    }
  },
  titleTextFooter: {
    color: '#fff'
  },
  textFooter: {
    fontSize: 12,
    lineHeight: '1.5rem'
  },
  socialNetworksDiv: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  }
}))

export default footerMaterialStyles
