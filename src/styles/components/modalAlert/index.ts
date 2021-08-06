import {makeStyles} from '@material-ui/core/styles'

const ModalAlertStyles = makeStyles(theme => ({
  divModal: {
    background: theme.palette.success.light,
    marginTop: 30,
    height: 120,
    borderRadius: 20,
    width: '50%',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    paddingLeft: 30,
    color: '#fff'
  },
  titleModal: {
    paddingBottom: 10
  },
  textModal: {

  },
  divTextModal: {
    width: '100%'
  },
  iconClose: {
    position: 'absolute',
    top: 0,
    right: '6px',
    color: '#fff'
  },
  social: {
    width: '30%',
  }
}))

export default ModalAlertStyles
