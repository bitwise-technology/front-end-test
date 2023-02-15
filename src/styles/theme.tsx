import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    white: 'rgb(251, 251, 251)',
    gray2: 'rgb(79,79,79)',
    primary: {
      10: 'rgb(233, 205, 228)',
      50: 'rgb(219, 175, 211)',
      100: 'rgb(206, 145, 195)',
      200: 'rgb(192, 114, 179)',
      300: 'rgb(179, 84, 162)',
      400: 'rgb(165, 54, 146)',
      500: 'rgb(140, 46, 124)',
      600: 'rgb(116, 38, 102)',
      700: 'rgb(91, 30, 80)',
      800: 'rgb(66, 22, 58)',
      900: 'rgb(41, 14, 37)',
    },
    secondary: {
      5: 'rgb(240, 240, 240)',
      10: 'rgb(205, 204, 205)',
      50: 'rgb(175, 174, 174)',
      100: 'rgb(145, 143, 144)',
      200: 'rgb(115, 113, 114)',
      300: 'rgb(85, 83, 83)',
      400: 'rgb(55, 52, 53)',
      500: 'rgb(47, 44, 45)',
      600: 'rgb(39, 36, 37)',
      700: 'rgb(30, 29, 29)',
      800: 'rgb(22, 21, 21)',
      900: 'rgb(14, 13, 13)',
    },
  },
}

const shadows = {
  outline: 'brand.primary.600',
}

const fonts = {
  heading: `'Gotham', sans-serif`,
  body: `'Gotham', sans-serif`,
}

export const theme = extendTheme({ colors, shadows, fonts })
