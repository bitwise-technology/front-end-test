import {makeStyles} from '@material-ui/core/styles'

export const customSwitchStyles = makeStyles( theme => ({
  root: {
    width: '42px !important',
    height: '26px !important',
    padding: '0 !important',
    margin: `${theme.spacing(1)} !important`,
  },
  switchBase: {
    padding: '1px !important',
    "&$checked": {
      transform: "translateX(16px) !important",
      color: `${theme.palette.common.white} !important`,
      "& + $track": {
        backgroundColor: theme.palette.info.main,
        opacity: 1,
        border: "none"
      }
    },
    "&$focusVisible $thumb": {
      color: theme.palette.info.main,
      border: "6px solid #fff"
    }
  },
  thumb: {
    backgroundColor: `${theme.palette.secondary.dark} !important`,
    width: '24px !important',
    height: '24px !important'
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  checked: {},
  focusVisible: {}
}))
