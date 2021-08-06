import createMuiTheme from '@material-ui/core/styles/createTheme'
import red from '@material-ui/core/colors/red'

export default createMuiTheme({
      palette: {
        primary:{
            main: '#382039',
            dark: '#200F21',
        },
        secondary: {
            main: '#5A3D5C',
            light: '#F0F0F0'
        },
        error: {
            main: red.A700,
        },
        success: {
            main: '#A51C92',
            light: 'linear-gradient(90deg, #A51C92 0%, #F638DC 100%)'
        },
        info: {
            main: '#FD71EA',
            light: 'linear-gradient(359.39deg, #EFEEEE 0.46%, #FFFFFF 99.42%)',
            dark: '#FAFAFC'
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
          }
        },
      },
    },

})
