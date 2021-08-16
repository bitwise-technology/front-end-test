import React from 'react'
import Image from 'next/image'

import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import PolygonFooter from '@assets/images/PolygonFooter.svg'
import Social from "../Social"
import footerMaterialStyles from '@styles/components/FooterStyles'
import Logo from '@assets/images/LogoFooter.svg'
import Link from 'next/link'

function Footer() {
  const classes = footerMaterialStyles()
  return (
    <footer className={classes.footer}>
      <Image
        src={PolygonFooter}
        height={PolygonFooter.height}
        width={PolygonFooter.width}
        alt='Polygon Footer'
        layout='responsive'
      />
      <Grid container className={classes.footerContainer}>
        <Grid
          container
          direction='row'
          spacing={3}
          alignItems='flex-start'
        >
          <Grid item md={2} sm={12} className={classes.logoFooter}>
            <Image src={Logo} height={Logo.height} width={Logo.width} alt="logo Bitwise" layout='responsive'/>
          </Grid>
          <Grid item md={4} sm={12} >
            <Typography paragraph variant='body2' className={classes.textFooter}>
              Acreditamos no valor da tecnologia e no impacto positivo que a
              transformação digital exerce sobre a sociedade, mudando o nosso
              dia a dia, facilitando atividades comuns e acelerando os negócios.
            </Typography>
          </Grid>
          <Grid item md={3} sm={12} classes={{root: classes.divCountry}}>
            <Typography variant='subtitle2' className={classes.titleTextFooter}>BRASIL</Typography>
            <Typography paragraph variant='body2' className={classes.textFooter}>
              R. Raphael Dias da Silva, 75 3º andar • Sala 306 e 308 Campolim •
              Sorocaba/SP
            </Typography>
          </Grid>
          <Grid item md={3} sm={12} classes={{root: classes.divCountry}}>
            <Typography
              variant='subtitle2'
              className={classes.titleTextFooter}
            >CANADÁ </Typography>
            <Typography paragraph variant='body2' className={classes.textFooter}>
              830, Av. Ernest-Gagnon, Bureau 315, Sala 609 Quebec
            </Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider}/>
        <Grid container justifyContent='space-between' spacing={3}>
          <Grid item md={4} sm={12} classes={{root: classes.divCopyRight}}>
            <Typography variant='body2' className={classes.textFooter}>
              Todos os direitos reservados - 2020
            </Typography>
          </Grid>
          <Grid item md={4} sm={12} className={classes.socialNetworksDiv}>
            <Social />
          </Grid>
          <Grid item md={4} sm={12} classes={{root: classes.divToback}}>
            <Link href='#header'>
              <a  className={classes.topBack}>
                <Typography variant='body2' className={classes.textFooter}>
                  VOLTAR AO TOPO
                </Typography>
              </a>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
