import { makeStyles } from '@material-ui/core/styles'

const homeUseStyles = makeStyles(() => ({
  polygonStart: {
    position: 'absolute',
    right: 0,
    zIndex: -1,
  },
  containerHome :{
    height: '92vh',
  },
  divImageLogo: {
    display: 'block',
  },
  divTitle :{
    paddingRight: 50
  },
  imagemNoteSearch: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  mainTitle : {
    fontSize: '42px',
    lineHeight: '50px',
    marginBottom: '87px',
  },
  headerHome :{
    paddingTop: '60px',
    height: '18vh'
  },
  divHeaderHome: {
    display: 'flex'
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
    },
    containerHome :{
      justifyContent: 'space-evenly',
    }
  },
  '@media screen and (max-width: 600px)': {
    mainTitle : {
      padding: 0,
      fontSize: '22px',
    },
    divHeaderHome: {
      justifyContent: 'center',
      marginBottom: 50,
    }
  },
}))

export default homeUseStyles
