import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import stack from '@assets/images/icons/stack.svg'
import stackWhite from '@assets/images/icons/stackWhite.svg'
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
        <Link href='https://stackoverflow.com/users/15898985/gerson-dantas'>
          <a target='_blank'>
            <Image src={white ? stackWhite : stack} height='24' width='24' alt='linkedin icon'/>
          </a>
        </Link>
      </Grid>
      <Grid item className={classes.iconSocial}>
        <Link href='https://www.linkedin.com/in/gersonsantosss/'>
          <a target='_blank'>
            <Image src={ white ? InWhite : In} height='24' width='24' alt='linkedin icon'/>
          </a>
        </Link>
      </Grid>
      <Grid item className={classes.iconSocial}>
        <Link href='https://www.instagram.com/gerson_santtoss/'>
          <a target='_blank'>
            <Image src={  white ? InstaWhite : Insta} height='24' width='24' alt='linkedin icon'/>
          </a>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Social
