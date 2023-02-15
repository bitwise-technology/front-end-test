import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Flex, Img, Text, useMediaQuery } from '@chakra-ui/react'

import { SocialIcons, SearchBar, Logo } from '@/components'
import { DataTable } from '@/components/DataTable'

import { getReposOfUser, getUserData } from '@/services/ApolloClient/queries'
import { UserPageProps } from '@/pages/user/[user]'
import { Repository, User } from '@/types'

export function UserView(props: UserPageProps) {
  const { userLogin } = props

  const [search, setSearch] = useState('')
  const [user, setUser] = useState<User | undefined>()
  const [repos, setRepos] = useState<Repository[]>([])
  const router = useRouter()

  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)', {
    ssr: true,
    fallback: false,
  })

  useEffect(() => {
    async function fetchUser() {
      try {
        setUser(await getUserData(userLogin))
      } catch (error) {
        console.log(error)
      }
    }

    if (userLogin) fetchUser()
  }, [userLogin])

  useEffect(() => {
    async function fetchUser() {
      try {
        setRepos(await getReposOfUser(user?.login))
      } catch (error) {
        console.log(error)
      }
    }

    if (user) fetchUser()
  }, [user])

  function handleOnSearch() {
    console.log(search)
    router.push(`/user/${search}`)
  }

  return (
    <>
      <Head>
        <title>Bitwise Challenge</title>
        <meta name='description' content='Bitwise Challenge: Search Github users' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Flex align='space-around' justify='center' w='100vw' gap='3rem' direction='column'>
        <Flex w='100%' align='center' justify='space-around' paddingTop='3.25rem'>
          <Logo />

          <SearchBar value={search} onChange={setSearch} onSearch={handleOnSearch} />

          {!isSmallerThan800 && <SocialIcons />}
        </Flex>

        <Flex
          id='user-info'
          align='center'
          justify='flex-start'
          direction='column'
          gap='2.5rem'
          px={{ base: '1rem', md: '5rem', lg: '6rem', xl: '9rem' }}
        >
          <Flex
            id='user-header'
            direction='row'
            align='center'
            justify={{ base: 'space-around', lg: 'start' }}
            w='100%'
            gap='2rem'
          >
            <Flex direction={{ lg: 'column' }} gap='0.375rem' align='center' justify='center'>
              <Img src={user?.avatar_url} alt={user?.name} w='7.5rem' boxShadow='md' />

              {isSmallerThan800 && <UserName name={user?.name} />}
            </Flex>

            <Flex direction='column'>
              {!isSmallerThan800 && <UserName name={user?.name} />}

              <Flex align='center' justify='center' boxShadow='md' padding='0.75rem' pos='relative' direction='column'>
                <Text fontSize='1.125rem' fontWeight='bold'>
                  {user?.repositoriesCount}
                </Text>

                <Flex
                  align='center'
                  justify='center'
                  w='0.188rem'
                  h='1rem'
                  bgColor='brand.primary.500'
                  borderRadius='0px 100px 100px 0px'
                  pos='absolute'
                  left={0}
                />

                <Text fontSize='0.75rem' fontWeight='normal'>
                  Repositórios
                </Text>
              </Flex>
            </Flex>
          </Flex>

          {repos.length > 0 && <DataTable data={repos} />}
        </Flex>

        <Flex bgColor='brand.primary.900' w='100%' h='31rem' direction='column' align='center' justify='space-around'>
          <Flex w='100%' align='center' justify='space-around' pt='10rem'>
            <Logo />

            <Text color='brand.white' w='39rem' pr='7rem' pl='4.5rem'>
              Acreditamos no valor da tecnologia e no impacto positivo que a transformação digital exerce sobre a
              sociedade, mudando o nosso dia a dia, facilitando atividades comuns e acelerando os negócios.
            </Text>

            <Flex>
              <Text color='brand.white'>
                BRASIL
                <br /> R. Raphael Dias da Silva, 75
                <br /> 3º andar • Sala 306 e 308
                <br /> Campolim • Sorocaba/SP
              </Text>
              <Text color='brand.white'>
                CANADÁ
                <br />
                830, Av. Ernest-Gagnon,
                <br />
                Bureau 315, Sala 609
                <br />
                Quebec
                <br />
              </Text>
            </Flex>
          </Flex>

          <Flex bgColor='brand.primary.10' w='59rem' h='0.2rem' />

          <Flex>
            <Text color='brand.white' w='100%' pr='7rem' pl='4.5rem'>
              Todos os direitos reservados - 2020
            </Text>

            <SocialIcons color='brand.white' />

            <Text
              color='brand.white'
              w='19rem'
              pr='7rem'
              pl='4.5rem'
              onClick={() => window?.scrollTo(0, 0)}
              _hover={{ cursor: 'pointer' }}
            >
              VOLTAR AO TOPO
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

function UserName({ name }: { name: string | undefined }) {
  return (
    <Text fontSize='1.5rem' fontWeight='bold' fontFamily='Gotham'>
      {name}
    </Text>
  )
}
