import React from 'react';
import Image from 'next/image'

import Grid from '@material-ui/core/Grid'
import HeaderStyles from '@styles/components/HeaderStyles'
import Link from '@material-ui/core/Link';

import Logo from '@assets/images/Logo.svg'
import Input from '@components/Input'
import Social from '@components/Social'

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
      >
        <Link href='/'>
          <a>
            <Grid >
              <Image src={Logo} height="48" width="133" alt="logo Bitwise" />
            </Grid>
          </a>
        </Link>
        <Grid className={classes.inputHeader}>
          <Input gitButton={false} />
        </Grid>
        <Grid>
          <Social />
        </Grid>
      </Grid>
    </header>
  )
}

export default Header;
