import { makeStyles } from '@material-ui/core/styles'

const homeUseStyles = makeStyles(() => ({
  polygonStart: {
    position: 'absolute',
    right: 0,
    zIndex: -1,
  },
  containerHome :{
    height: 'fit-content',
  },
  divImageLogo: {
    display: 'block',
  },
  divTitle :{
    paddingRight: 50
  },
  imagemNoteSearch: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 50
  },
  mainTitle : {
    fontSize: '42px',
    lineHeight: '50px',
    marginBottom: '87px',
  },
  headerHome :{
    paddingTop: '30px',
  },
  divHeaderHome: {
    display: 'flex'
  },
  socialNetworksHome: {
    position: 'absolute',
    bottom: 5,
    left: '50%',
    transform: 'translateX(-50%)'
  },
  '@media screen and (max-width: 960px)': {
    divTitle :{
      paddingRight: 0
    },
    imagemNoteSearch: {
      justifyContent: 'center',
      width: '100%'
    },
    polygonStart: {
      display: 'none',
    },
    mainTitle : {
      fontSize: '32px',
      textAlign: 'center'
    },
    containerHome :{
      justifyContent: 'space-evenly',
    }
  },
  '@media screen and (max-width: 600px)': {
    socialNetworksHome: {
      position: 'relative',
    },
    mainTitle : {
      padding: 0,
      fontSize: '22px',
    },
    divHeaderHome: {
      justifyContent: 'center',
      marginBottom: 10,
    },
    divItensHome: {
      justifyContent: 'center'
    },
  },
}))

export default homeUseStyles
