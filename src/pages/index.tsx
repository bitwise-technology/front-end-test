import Image from 'next/image'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'

import Social from '@components/Social'
import Input from '@components/Input'
import Modal from '@components/ModalAlert'
import Logo from '@assets/images/Logo.svg'
import imageApp from '@assets/images/img-app.svg'
import Polygon from '@assets/images/Polygon.svg'
import useStylesMaterial from '@styles/pages/home'
import {useGlobalContextData} from '@store/globalContext'
import CustomSwitch from '@components/customSwitch'

export default function Home() {
  const classes = useStylesMaterial()
  const {visibleModal} = useGlobalContextData()
  return (
    <>
      {visibleModal && <Modal />}
      <Grid className={classes.polygonStart}>
        <Image src={Polygon} height="539" width="770" alt="polygon start" />
      </Grid>
      <Grid container direction="column" className={classes.containerHome}>
        <Grid item>
          <header className={classes.headerHome}>
            <Grid container direction='row'
              alignItems='center'
              spacing={2}
              classes={{root: classes.divHeaderHome}}>
              <Grid item xl={6} >
                <Image src={Logo} height={Logo.height} width={Logo.width} alt="logo Bitwise" />
              </Grid>
              <Grid item xl={6}>
                <CustomSwitch />
              </Grid>
            </Grid>
          </header>
        </Grid>
        <Grid item>
          <main>
            <section>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={4}
                classes={{root: classes.divItensHome}}
              >
                <Grid item sm={12} md={6} className={classes.divTitle}>
                  <Typography
                    className={classes.mainTitle}
                    color="secondary"
                    variant="h1"
                    component="h1"
                  >
                    Buscar um usuário no <strong>GitHub </strong>ficou muito <strong>fácil!</strong>
                  </Typography>
                  <Input gitButton />
                </Grid>
                <Grid item sm={12} md={6} classes={{
                  item: classes.imagemNoteSearch
                }}>
                  <Image
                    src={imageApp}
                    height="403"
                    width="443"
                    alt="image App"
                  />
                </Grid>
              </Grid>
            </section>
          </main>
        </Grid>
      </Grid>
      <Grid container justifyContent='center'>
        <Social />
      </Grid>
    </>
  )
}
