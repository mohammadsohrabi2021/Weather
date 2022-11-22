import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    direction: 'rtl',
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'mainButton' },
                    style: {
                        color: '#fff',
                        backgroundColor: 'rgb(66, 133, 242)',
                        borderRadius: '4px',
                        textAlign: 'center',
                        padding: 12,
                        width: '100%',
                        '&:hover': {
                            backgroundColor: 'rgb(66, 133, 242)',
                        }
                    }
                },
                {
                    props: { variant: 'secondaryButton' },
                    style: {
                        color: "#727272",
                        borderRadius: '4px',
                        height: 35

                    }
                }

            ]
        },

        MuiCssBaseline: {
            styleOverrides: {
                
                body: {
                    boxSizing: 'border-box',
                    '.flexDir': {
                        '@media only screen and (max-width:590px)': {
                            flexDirection: 'column'
                        }
                    },
                    'a': {
                        textDecoration: 'none'
                    },
                    fontFamily:'IRANSANS', 
                }

            }

        },
    },
    palette: {
        primary: {
            main: '#673ab7',
            dark: '#311b92',
            light: '#9575cd',
        },
        common: {
            white: '#ffffff',
            black: '#000000'
        },

    },
    typography:{
        fontFamily:'IRANSANS', 
        h1: {
        
          fontSize: '2.5rem',
          fontWeight: 900,
          lineHeight: 1.5,
          color: 'rgba( 0.85,  0,  0.85, 0.85)'
      },
        h2: {
    
          fontSize: '1.80rem',
          fontWeight: 800,
          lineHeight: 1.5,
          color:'rgba(0, 0, 0, 0.85)'
         
          },
        h3: {
       
          fontSize: 12,
          fontWeight: 700,
          lineHeight: '18px',
          color:'rgba(0, 0, 0, 0.85)'
      },
    }

});

export default theme;