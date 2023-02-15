import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { Flex, Img, Text, useMediaQuery } from '@chakra-ui/react'

import { SocialIcons, SearchBar, Logo } from '@/components'

export function HomeView() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  function handleOnSearch() {
    router.push(`/user/${search}`)
  }

  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)', {
    ssr: true,
    fallback: false,
  })

  return (
    <>
      <Head>
        <title>Bitwise Challenge</title>
        <meta name='description' content='Bitwise Challenge: Search Github users' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Flex as='body' h='100vh' w='100vw' align='start' justify='space-between' direction='column'>
        <Img src='/imgs/Polygon_1.svg' alt='Polygon 1' pos='absolute' right='0' w='60%' />

        <Flex pt={{ base: '2rem', lg: '3.75rem' }} pl={{ base: '1rem', lg: '9.4rem' }} direction='column'>
          <Flex h='3rem'>
            <Logo />
          </Flex>

          <Flex direction='column' gap='3rem' pt='8.3rem' pr='1.5rem'>
            <Text color='brand.primary.800' fontSize={{ base: '2rem', lg: '3rem' }}>
              Buscar um usuário {isSmallerThan800 && <br />} no
              <Text fontWeight='bold' as='span'>
                {' Github '}
              </Text>
              {!isSmallerThan800 && <br />} ficou {isSmallerThan800 && <br />} muito
              <Text fontWeight='bold' as='span'>
                {' fácil!'}
              </Text>
            </Text>

            <SearchBar value={search} onChange={setSearch} onSearch={handleOnSearch} />
          </Flex>
        </Flex>

        <Flex as='footer' alignSelf='center' justifySelf='flex-end' pb='2.5rem'>
          <SocialIcons />
        </Flex>
      </Flex>
    </>
  )
}
