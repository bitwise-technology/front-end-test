import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import Grid from '@material-ui/core/Grid'

import { useGlobalContextData } from '@store/globalContext'
import RenderSearch from './RenderSearch'
import gitHub from '@assets/images/icons/gitHub.svg'
import inputUseStyles from '@styles/components/InputStyles'

interface InputProps {
  gitButton: boolean
}

const Input: React.FC<InputProps> = ({ gitButton}) => {
  const paperRefSearch = useRef(null)
  const [searchUser, setSearchUser] = useState('')
  const [tipeSearch, setTipeSearch] = useState('')

  const { setArrayUsers, setVisibleModal } = useGlobalContextData()

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setArrayUsers([])
    setTipeSearch('onChange')
    setSearchUser(e.target.value)
  }

  const handleSearch = () => {
    if(!!searchUser) {
      setSearchUser('')
      Router.push({
        pathname: 'UsersSearch',
        query: {query: searchUser}
      })
    } else {
      setVisibleModal(true)
    }
  }

  const materialStyles = inputUseStyles()

  return (
    <Grid
      container
      direction="column"
      className={materialStyles.inputContainer}
    >
      <Paper className={materialStyles.inputContent} elevation={3}>
        <IconButton onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
        <InputBase className={materialStyles.input} value={searchUser} placeholder='Buscar usuário' onChange={handleChange}/>
        {gitButton && (
          <Link
            href={`https://github.com/search?q=${searchUser}+in%3Afullname&type=Users`}
          >
            <a target='_blank'>
              <Button
                classes={{
                  root: materialStyles.divButton
                }}
              >
                <Image
                  src={gitHub}
                  height="21.03"
                  width="19.05"
                  className="buttonGit"
                />
              </Button>
            </a>
          </Link>
        )}
      </Paper>
      <RenderSearch
        typeSearch={tipeSearch}
        first={9}
        query={searchUser}
        paperRefSearch={paperRefSearch}
        setTipeSearch={setTipeSearch}
      />
    </Grid>
  )
}

export default Input
