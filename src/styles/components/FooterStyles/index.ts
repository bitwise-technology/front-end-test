import { makeStyles } from '@material-ui/core/styles'

const footerMaterialStyles = makeStyles(theme => ({
  footer: {
    width: '100vw',
    height: 'fit-content',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main
  },
  footerContainer: {
    minHeight: 400,
    padding: '5% 15.1% 0 15.1%'
  },
  logoFooter: {
  },
  divider:{
    minHeight: 3,
    minWidth: '100%',
    backgroundColor: theme.palette.secondary.main
  },
  topBack: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    fontFamily: '"Roboto", sans-serif',
    fontSize: 16,
    textAlign: 'end',
    '&:hover': {
      color: theme.palette.secondary.light
    }
  },
  titleTextFooter: {
    color: '#fff'
  },
  divToback: {
  },
  divCountry: {
  },
  divCopyRight: {
    width: '100%'
  },
  textFooter: {
    fontSize: 12,
    lineHeight: '1.5rem'
  },
  socialNetworksDiv: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
  },
  '@media screen and (max-width: 960px)': {
    logoFooter: {
      display: 'none'
    },
    socialNetworksDiv: {
      bottom: 0
    },
    divToback: {
      marginBottom: 70,
      width: '100%'
    },
    divCountry: {
      width: '100%',
    },
    textFooter: {
      textAlign: 'center',
    },
    divider:{
      marginBottom: 10
    },
    titleTextFooter: {
      textAlign: 'center'
    },
  }
}))

export default footerMaterialStyles
