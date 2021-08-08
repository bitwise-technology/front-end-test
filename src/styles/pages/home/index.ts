import { makeStyles } from '@material-ui/core/styles'

const homeUseStyles = makeStyles((theme) => ({
  polygonStart: {
    position: 'absolute',
    right: 0,
    zIndex: -1
  },
  containerHome :{
    height: '92vh',
  },
  divTitle :{
    width: '44%',
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
}))

export default homeUseStyles
