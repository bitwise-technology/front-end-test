import {makeStyles} from '@material-ui/core/styles'

const HeaderStyles = makeStyles(theme => ({
  headerSearch: {
    paddingTop: '60px',
    marginBottom: '60px'
  },
  divLogoHeaderUS: {
    display: 'flex',
    alignItems: 'center',
  },
  inputHeader: {
  },
  divSocialUS: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  '@media screen and (max-width: 960px)': {
    divSocialUS: {
      justifyContent: 'center',
    },
    divLogoHeaderUS: {
      justifyContent: 'center',
    },
  }
}))

export default HeaderStyles
