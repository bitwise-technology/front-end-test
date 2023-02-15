import { GetServerSideProps } from 'next'

import { UserView } from '@/views/User'

export interface UserPageProps {
  userLogin: string
}

export default function UserPage(props: UserPageProps) {
  return <UserView {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = context.query.user

  return {
    props: {
      userLogin: user,
    },
  }
}
