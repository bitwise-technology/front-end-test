import { Flex, Icon, Img } from '@chakra-ui/react'
import Link from 'next/link'

import { IoLogoInstagram } from 'react-icons/io'
import { TbBrandLinkedin } from 'react-icons/tb'
import { MediumIcon } from '../MediumIcon'

export interface SocialIconsProps {
  color?: string
  size?: string
}

export function SocialIcons(props: SocialIconsProps) {
  return (
    <Flex align='center' justify='center' gap='0.8rem'>
      <SocialIcon {...props} url='https://medium.com/@bitwisetechnology' icon={MediumIcon} />
      <SocialIcon {...props} url='https://www.linkedin.com/company/bitwisetechnology' icon={TbBrandLinkedin} />
      <SocialIcon {...props} url='https://www.instagram.com/bitwisetechnology/' icon={IoLogoInstagram} />
    </Flex>
  )
}

export interface SocialIcon {
  size?: string
  url: string
  color?: string
  icon?: (props: any) => JSX.Element
  img?: string
}

const SocialIcon = (props: SocialIcon) => (
  <Link
    href={props.url}
    target='_blank'
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Icon
      as={props.icon}
      h={props.size || '1.8rem'}
      w={props.size || '1.8rem'}
      color={props.color ? props.color : 'brand.primary.800'}
      transition='all 0.2s ease-in-out'
      _hover={{
        boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.2)',
        borderRadius: '4px',
      }}
    />
  </Link>
)
