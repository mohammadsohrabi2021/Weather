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

});

export default theme;