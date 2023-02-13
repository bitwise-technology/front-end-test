import Head from 'next/head'
import { Flex, Text } from '@chakra-ui/react'

export function Home() {
  return (
    <>
      <Head>
        <title>Bitwise Challenge</title>
        <meta name='description' content='Bitwise Challenge: Search Github users' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex align='center' justify='center'>
        <Text as='h1' fontSize='6xl' color='brand.primary.600'>
          Hello World, Bitwise Challenge
        </Text>
      </Flex>
    </>
  )
}
