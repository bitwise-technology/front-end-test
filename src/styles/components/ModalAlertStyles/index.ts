import {makeStyles} from '@material-ui/core/styles'

const ModalAlertStyles = makeStyles(theme => ({
  divModal: {
    background: theme.palette.success.light,
    marginTop: 30,
    height: 120,
    borderRadius: 20,
    width: '50% !important',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    paddingLeft: 30,
    color: '#fff'
  },
  titleModal: {
    paddingBottom: 10,
    wordWrap: 'break-word'
  },
  divTextModal: {
    width: '100%',
    padding: '0 14px 15px 0',
    '& > p': {
      width: '70%'
    }
  },
  iconClose: {
    position: 'absolute',
    top: 0,
    right: '6px',
    color: '#fff !important'
  },
  socialModal: {
    width: '30% !important',
  }
}))

export default ModalAlertStyles
