import Link from 'next/link'
import { Img, ImgProps } from '@chakra-ui/react'

export function Logo(props: ImgProps) {
  return (
    <Link href='/'>
      <Img src='/imgs/Logo.svg' justifySelf='left' {...props} />
    </Link>
  )
}
