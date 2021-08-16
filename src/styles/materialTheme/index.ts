import createMuiTheme from '@material-ui/core/styles/createTheme'
import red from '@material-ui/core/colors/red'

export const createTheme = (dark:  boolean) =>
  createMuiTheme({
        palette: {
          type: dark ? 'dark' : 'light',
          primary:{
              main: '#7CBAE6',
              light: '#6c6c6c',
              dark: '#9CDAF0'
          },
          secondary: {
              main: '#BF827A',
              dark: '#F0F0F0',
              light: '#AC5C51'
          },
          error: {
              main: red.A700,
          },
          success: {
              main: '#5FA3D3',
              light: 'linear-gradient(90deg, #7CBAE6 0%, #9CDAF0 100%)',
          },
          info: {
              main: '#71C2FD',
              dark: '#FAFAFC',
              light: '#EEF6FF'
          },
      },
      overrides: {
        MuiCssBaseline: {
          '@global' : {
            main: {
              padding: '0 50px 0 50px',
            },
            header: {
              padding: '0 50px 0 50px',
            },
            html: {
              scrollBehavior: 'smooth',
              fontFamily: '"Roboto", sans-serif'
            },
            footer: {
              padding: '0',
              position: 'absolute',
              right: 0,
            },
            '@media screen and (max-width: 600px)': {
              main: {
                padding: 0
              },
              header: {
                padding: 0,
              },
            }
          },
        },
      },

  })

