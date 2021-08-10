import React from 'react'
import Image from 'next/image'
import Paper from '@material-ui/core/Paper'

import Loading from '@assets/images/animation/loding.gif'

function IsLoading({className}: {className?: string}) {
  return (
    <Paper className={className} elevation={0}>
      <Image src={Loading} height='80' width='115' alt='loading'/>
    </Paper>
  )
}

export default IsLoading;
