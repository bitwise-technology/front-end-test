import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

//material import
import Grid from '@material-ui/core/Grid'
import Modal from '@components/ModalAlert'

import Input from '@components/Input'
import Social from '@components/Social'
import Table from '@components/Table'
import Logo from '@assets/images/Logo.svg'
import searchMaterialStyles from '@styles/pages/Search'
import { getUsersSearc } from '@shared/useQuery'
import { DATA_USER } from '@shared/graphql'
import { Typography } from '@material-ui/core'
import Footer from '@components/Footer'
import {useGlobalContextData} from '@store/globalContext'

function Search() {
  const {
    query: { login }
  } = useRouter()
  const {visibleModal} = useGlobalContextData()
  const classes = searchMaterialStyles()

  const { loading, error, data } = getUsersSearc({ login }, DATA_USER)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      {visibleModal && <Modal />}
      <header id='header'>
        <Grid
          container
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          className={classes.headerSearch}
        >
          <Grid >
            <Image src={Logo} height="48" width="133" alt="logo Bitwise" />
          </Grid>
          <Grid className={classes.inputHeader}>
            <Input gitButton={false} />
          </Grid>
          <Grid className={classes.socialHeader}>
            <Social />
          </Grid>
        </Grid>
      </header>
      <main className={classes.mainSearch}>
        <Grid container direction='row' alignItems='flex-end' className={classes.containerAvatarRepos}>
          <img src={data.user.avatarUrl} alt={data.user.name} className={classes.avatar}/>
          <Grid container direction='column' className={classes.infoUser}>
            <Typography variant='h2' className={classes.userName}>{data.user.name}</Typography>
            <Grid
              container direction='row'
              alignItems='center'
              className={classes.containerSquare}
            >
              <Grid className={classes.retangle}/>
              <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
                className={classes.containerRepoCount}
              >
                <strong className={classes.strongCrepo}>{data.user.repositories.totalCount}</strong>
                <p className={classes.repositoriesSquare}>Repositórios</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Table
          login={login as string}
        />
      </main>
      <Footer />
    </>
  )
}

export default Search
