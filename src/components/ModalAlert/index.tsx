import React from 'react'
import Modal from '@material-ui/core/Modal'
import { useGlobalContextData } from '@store/globalContext'
import { Grid, IconButton, Typography } from '@material-ui/core'
import Social from '@components/Social'
import ModalAlertStyles from '@styles/components/ModalAlertStyles'
import CloseIcon from '@material-ui/icons/Close';

function ModalAlert() {
  const classes = ModalAlertStyles()
  const { visibleModal, setVisibleModal } = useGlobalContextData()
  return (
    <Modal
      hideBackdrop
      open={visibleModal}
      onClose={() => setVisibleModal(false)}
      >
      <Grid
        container
        direction='column'
        justifyContent='flex-end'
        className={classes.divModal}
      >
        <IconButton className={classes.iconClose} onClick={() => setVisibleModal(false)}>
          <CloseIcon />
        </IconButton>
        <Grid >
          <Typography variant='h6' className={classes.titleModal}>
            Nenhum usuário encontrado!
          </Typography>
        </Grid>
        <Grid>
          <Grid container direction='row' className={classes.divTextModal}>
            <Typography variant='body2'>
              Enquanto isso, acompanhe minhas redes sociais
            </Typography>
            <Social className={classes.socialModal} white />
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default ModalAlert
