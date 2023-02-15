import {
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  IconButton,
  Img,
  Text,
  InputRightElement,
  Icon,
  useMediaQuery,
  Button,
  useToast,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiGithub, FiSearch } from 'react-icons/fi'
import { IoCloseSharp } from 'react-icons/io5'
import { SocialIcons } from '../SocialIcons'

export interface SearchBarProps {
  placeholder?: string
  value?: string
  onSearch: () => void
  onChange: (value: string) => void
}

export interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  score: number
}

export function SearchBar(props: SearchBarProps) {
  const { placeholder = 'Buscar usuário', value, onSearch, onChange } = props
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)', {
    ssr: true,
    fallback: false,
  })

  const toast = useToast()

  const [users, setUsers] = useState<User[]>([])
  const [inputIsFocused, setInputIsFocused] = useState(false)
  const [showSearchBar, setShowSearchBar] = useState(false)

  function handleSearch() {
    if (users.length === 0) {
      toast({
        position: isSmallerThan800 ? 'bottom' : 'bottom-right',
        duration: 3000,
        isClosable: true,
        render: () => (
          <Flex
            bg='linear-gradient(90deg, #5B1E50 0%, #8C2E7C 100%)'
            borderRadius='20px'
            direction='column'
            pl='2.5rem'
            pt='2.2rem'
            h='10rem'
            w='50rem'
            mr='20rem'
            gap='1rem'
          >
            <Flex
              position='absolute'
              top='1rem'
              right='1rem'
              _hover={{ cursor: 'pointer' }}
              onClick={() => toast.closeAll()}
            >
              <IoCloseSharp size={30} color='white' />
            </Flex>

            <Text color='white' fontSize='1.5rem'>
              Nenhum usuário encontrado!
            </Text>

            <Flex gap='1rem'>
              <Text color='white' fontSize='1rem'>
                Enquanto isso, acompanhe a Bitwise nas redes sociais:
              </Text>

              <SocialIcons color='brand.white' size='1.2rem' />
            </Flex>
          </Flex>
        ),
      })
    } else if (value) {
      onSearch()
    }
  }

  function handleHideSearchBar() {
    setShowSearchBar(false)
    setInputIsFocused(false)

    // @ts-ignore
    document?.activeElement?.blur()
  }

  function handleInputFocus() {
    setInputIsFocused(true)
    setShowSearchBar(true)

    document?.getElementById('search-input')?.focus()
  }

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(`https://api.github.com/search/users?q=${value}`)

      const data = await response.json()

      console.log(data)

      if (!data.items) {
        setUsers([])
      } else if (data.items.length > 5) {
        setUsers(data.items.slice(0, 5))
      } else {
        setUsers(data.items)
      }
    }

    if (value) {
      fetchUsers()
    }
  }, [value])

  if (isSmallerThan800 && !showSearchBar) {
    return (
      <Button
        bgColor='transparent'
        color='brand.gray2'
        onClick={handleInputFocus}
        _hover={{ bgColor: 'transparent', color: 'brand.primary.400' }}
      >
        <FiSearch size='100%' />
      </Button>
    )
  }

  return (
    <Flex
      gap='0.5rem'
      pos='relative'
      direction='column'
      w={{ base: '60%', md: '35rem' }}
      _focus={{ boder: 'none', outline: 'none' }}
    >
      <Flex _focus={{ boder: 'none', outline: 'none' }} boxShadow='md'>
        <InputGroup _focus={{ boder: 'none', outline: 'none' }}>
          <InputLeftElement>
            <Icon as={FiSearch} color='brand.gray2' />
          </InputLeftElement>

          <Input
            autoFocus={isSmallerThan800 ? true : inputIsFocused}
            id='search-input'
            borderRadius='4px'
            color='brand.gray2'
            focusBorderColor='brand.gray2'
            placeholder={placeholder}
            value={value}
            onFocus={handleInputFocus}
            onChange={(e) => onChange(e.target.value)}
            onBlur={() => setTimeout(handleHideSearchBar, 2 * 100)}
            onKeyUp={(e) => {
              if (e.key === 'Escape') handleHideSearchBar()
              if (e.key === 'Enter') [handleSearch(), handleHideSearchBar()]
            }}
          />

          <InputRightElement>
            <IconButton
              aria-label='Github'
              icon={<FiGithub />}
              onClick={handleSearch}
              borderRadius='4px'
              color='white'
              bgColor='brand.primary.800'
              _focus={{ bgColor: 'brand.primary.900' }}
              _hover={{ bgColor: 'brand.primary.900' }}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Flex
        w='100%'
        maxH={`${inputIsFocused ? '12rem' : '0'}`}
        transition='max-height 0.1s ease-in-out'
        direction='column'
        align='flex-start'
        boxShadow={users.length > 0 ? 'md' : 'none'}
        borderRadius='8px 8px 8px 8px'
        justify='center'
        overflowY='auto'
        marginTop='3rem'
        paddingTop={`${users.length % 2 === 0 ? '4rem' : '0'}`}
        pos='absolute'
        sx={{
          '&::-webkit-scrollbar': {
            width: '13px',
            borderRadius: '0 8px 8px 0',
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '0 8px 8px 0',
            backgroundColor: `rgba(140, 46, 124, 0.4)`,
          },
        }}
      >
        {users.map((user, index) => (
          <Link key={index} href={`/user/${user.login}`} style={{ width: '100%' }}>
            <Flex
              h='4rem'
              w='100%'
              align='center'
              justify='flex-start'
              gap='2rem'
              paddingLeft='0.5rem'
              transition='all 0.2s ease-in-out'
              bgColor={index % 2 === 0 ? 'gray.100' : 'gray.50'}
              _hover={{ bgColor: 'brand.primary.10' }}
              role='group'
            >
              <Img
                src={user.avatar_url}
                w='3rem'
                h='3rem'
                objectFit='contain'
                alt={user.login}
                borderRadius='10px'
                transition='all 0.2s ease-in-out'
                _groupHover={{ w: '3.3rem', h: '3.3rem' }}
              />

              <Text fontWeight='bold'>{user.login}</Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Flex>
  )
}
