import Image from 'next/image'

//material import
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

export default function Home() {
  const materialStyles = useStylesMaterial()
  const {visibleModal} = useGlobalContextData()
  return (
    <>
      {visibleModal && <Modal />}
      <Grid className={materialStyles.polygonStart}>
        <Image src={Polygon} height="539" width="770" alt="polygon start" />
      </Grid>
      <Grid container direction="column" className={materialStyles.containerHome}>
        <header className={materialStyles.header}>
          <Grid>
            <Image src={Logo} height="48" width="133" alt="logo Bitwise" />
          </Grid>
        </header>
        <main>
          <section>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid className={materialStyles.divTitle}>
                <Typography
                  className={materialStyles.mainTitle}
                  color="primary"
                  variant="h1"
                  component="h1"
                >
                  Buscar um usuário no <strong>GitHub </strong>ficou muito <strong>fácil!</strong>
                </Typography>
                <Input gitButton={true} />
              </Grid>
              <Grid>
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
      <Social />
    </>
  )
}
