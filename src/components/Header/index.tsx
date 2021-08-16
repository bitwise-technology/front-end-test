import React from 'react';
import Image from 'next/image'

import Grid from '@material-ui/core/Grid'
import HeaderStyles from '@styles/components/HeaderStyles'
import Link from '@material-ui/core/Link';

import Logo from '@assets/images/Logo.svg'
import Input from '@components/Input'
import Social from '@components/Social'
import CustomSwitch from '@components/customSwitch';

function Header () {
  const classes = HeaderStyles ()
  return (
    <header id='header'>
      <Grid
        container
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        className={classes.headerSearch}
        spacing={2}
      >
        <Grid item sm={12} xs={12} md={4} classes={{root: classes.divLogoHeaderUS}}>
          <Link href='/'>
            <a>
              <Image src={Logo} height="48" width="133" alt="logo Bitwise" />
            </a>
          </Link>
          <CustomSwitch />
        </Grid>
        <Grid className={classes.inputHeader} item sm={12} xs={12} md={4}>
          <Input gitButton={false} />
        </Grid>
        <Grid item sm={12} xs={12} md={4} classes={{root: classes.divSocialUS}}>
          <Social />
        </Grid>
      </Grid>
    </header>
  )
}

export default Header;
