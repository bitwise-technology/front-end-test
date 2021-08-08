import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Mediun from '@assets/images/icons/mediun.svg'
import MediunWhite from '@assets/images/icons/mediunWhite.svg'
import In from '@assets/images/icons/in.svg'
import InWhite from '@assets/images/icons/inWhite.svg'
import Insta from '@assets/images/icons/insta.svg'
import InstaWhite from '@assets/images/icons/instaWhite.svg'
import Grid from "@material-ui/core/Grid"
import SocialIconStyles from '@styles/components/SocialIconStyles'

interface PropsSocial {
  className?: string
  white?: boolean
}

function Social({className, white}: PropsSocial) {
  const classes = SocialIconStyles()
  return (
    <Grid container direction='row' justifyContent='center' className={className}>
      <Grid item className={classes.iconSocial}>
        <Link href='https://medium.com/brasil'>
          <a target='_blank'>
            <Image src={white ? MediunWhite : Mediun} height='24' width='24' alt='linkedin icon'/>
          </a>
        </Link>
      </Grid>
      <Grid item className={classes.iconSocial}>
        <Link href='https://www.linkedin.com/'>
          <a target='_blank'>
            <Image src={ white ? InWhite : In} height='24' width='24' alt='linkedin icon'/>
          </a>
        </Link>
      </Grid>
      <Grid item className={classes.iconSocial}>
        <Link href='https://www.instagram.com/'>
          <a target='_blank'>
            <Image src={  white ? InstaWhite : Insta} height='24' width='24' alt='linkedin icon'/>
          </a>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Social
