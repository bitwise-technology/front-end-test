import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router'

import List from '@material-ui/core/List'

import Modal from '@components/ModalAlert'
import ListUsers from '@components/ListUsers'
import UsersSearchStyles from '@styles/pages/usersSearch'
import {useGlobalContextData} from '@store/globalContext'
import Header from '@components/Header'
import Footer from '@components/Footer'

function UserSearch() {
  const {
    query: { query }
  } = useRouter()
  const paperRefListUsers = useRef(null)
  const { visibleModal } = useGlobalContextData()
  const classes = UsersSearchStyles()

  const [LocalArrayUsers, setLocalArrayUsers] = useState<Array<any>>([])
  const [after, setAfter] = useState('')
  const [nextPage, setNextPage] = useState(false)

  const handleAfter = (endCursor: string, hasNextPage: boolean) => {
    setAfter(endCursor)
    setNextPage(hasNextPage)
  }

  return (
    <>
      {visibleModal && <Modal />}
      <Header />
      <main className={classes.mainUsersSearch}>
        <List>
          <ListUsers
            after={after}
            nextPage={nextPage}
            first={9}
            query={query as string}
            array={LocalArrayUsers}
            setArray={setLocalArrayUsers}
            handleAfter={handleAfter}
            paperRefListUsers={paperRefListUsers}
          />
        </List>
      </main>
      <Footer />
    </>
  )
}

export default UserSearch
